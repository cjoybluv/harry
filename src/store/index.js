import { createStore } from "vuex";
import axios from "axios";
import * as auth from "@/store/modules/auth";
import * as item from "@/store/modules/item";

export default createStore({
  state: {
    nations: [],
  },
  getters: {
    nations(state) {
      return state.nations;
    },
  },
  mutations: {
    SET_NATIONS(state, nations) {
      state.nations = nations;
    },
  },
  actions: {
    fetchNations({ commit }) {
      return new Promise((resolve) => {
        axios
          .get(
            "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
          )
          .then((response) => {
            commit("SET_NATIONS", response.data.data);
            resolve(response.data);
          });
      });
    },
  },
  modules: {
    auth,
    item,
  },
});
