import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count = state.count + 1;
    },
    decrement(state) {
      state.count = state.count - 1;
    },
    reset(state) {
      state.count = 0;
    },
    setValue(state, value) {
      state.count = value;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    },
    setValue({ commit }, value) {
      commit("setValue", value);
    },
  },
  getters: {
    count: (state) => state.count,
  },
});

export default store;
