import authService from "@/service/authService";
import http from "@/http-common";

export const namespaced = true;

export const state = {
  user: {},
  token: "",
};

export const getters = {
  token(state) {
    return state.token || localStorage.getItem("token");
  },
  user(state) {
    return state.user || JSON.parse(localStorage.getItem("user") || "");
  },
};

export const mutations = {
  CLEAR_USER(state) {
    state.user = {};
    localStorage.removeItem("user");
  },
  SET_USER(state, user) {
    if (user._id) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    }
  },
  CLEAR_TOKEN(state) {
    state.token = "";
    const common = http.defaults.headers.common;
    delete common.Authorization;
    localStorage.removeItem("token");
  },
  SET_TOKEN(state, token) {
    state.token = token;
    http.defaults.headers.common.Authorization = "Bearer " + token;
    localStorage.setItem("token", token);
  },
};

export const actions = {
  login({ commit }, loginDto) {
    commit("CLEAR_USER");
    commit("CLEAR_TOKEN");
    return new Promise((resolve) => {
      authService
        .login(loginDto)
        .then((response) => {
          commit("SET_USER", response.data.user);
          commit("SET_TOKEN", response.data.access_token);
          resolve(response.data);
        })
        .catch((err) => {
          alert("Login Failed!");
          throw new Error(err);
        });
    });
  },
  logout({ commit }) {
    commit("CLEAR_USER");
    commit("CLEAR_TOKEN");
    commit("item/CLEAR_ITEMS", null, { root: true });
  },
  resetUserToken({ commit, getters }) {
    commit("SET_TOKEN", getters.token);
    const user =
      JSON.parse(localStorage.getItem("user") || "{}") || getters.user;
    commit("SET_USER", user);
  },
};
