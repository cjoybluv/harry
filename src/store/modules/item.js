import itemService from "@/service/itemService";

export const namespaced = true;

export const state = {
  items: [],
};

export const getters = {
  items(state) {
    return state.items;
  },
  cascadedItems(state) {
    return state.items.map((item) => {
      return { value: item._id, label: item.name };
    });
  },
};

export const mutations = {
  CLEAR_ITEMS(state) {
    state.items = [];
  },
  SET_ITEMS(state, items) {
    state.items = items;
  },
  SAVE_ITEM(state, newItem) {
    state.items.push(newItem);
  },
  UPDATE_ITEM(state, updatedItem) {
    const idx = state.items.findIndex((item) => item._id === updatedItem._id);
    state.items[idx] = updatedItem;
  },
  DELETE_ITEM(state, id) {
    state.items = state.items.filter((item) => item._id !== id);
  },
};

export const actions = {
  setItems({ commit }, items) {
    commit("SET_ITEMS", items);
  },
  clearItems({ commit }) {
    commit("CLEAR_ITEMS");
  },
  fetchAll({ commit }) {
    return new Promise((resolve) => {
      itemService
        .getItems()
        .then((response) => {
          commit("SET_ITEMS", response.data);
          resolve(response.data);
        })
        .catch((err) => console.log(err));
    });
  },
  save({ commit }, newItem) {
    return new Promise((resolve) => {
      itemService
        .postItem(newItem)
        .then((response) => {
          commit("SAVE_ITEM", response.data);
          resolve(response.data);
        })
        .catch((err) => console.log(err));
    });
  },
  update({ commit }, updatedItem) {
    return new Promise((resolve) => {
      itemService
        .patchItem(updatedItem._id, updatedItem)
        .then((response) => {
          commit("UPDATE_ITEM", updatedItem);
          resolve(response.data);
        })
        .catch((err) => console.log(err));
    });
  },
  delete({ commit }, id) {
    return new Promise((resolve) => {
      itemService
        .deleteItem(id)
        .then((response) => {
          commit("DELETE_ITEM", response.data._id);
          resolve(response.data);
        })
        .catch((err) => console.log(err));
    });
  },
};
