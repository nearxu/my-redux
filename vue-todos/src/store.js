import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    count: 100,
    sum: 99,
    isShow: true,
    // todolist
    list: [],
    filter: "ALL",

    types:['ALL','UNDO','DONE']
  },
  getters: {
    filterCount(state) {
      return state.count >= 120 ? 120 : state.count;
    },
    sumGet(state) {
      return state.sum >= 200 ? 200 : state.sum;
    }
  },
  mutations: {
    add(state, payload) {
      state.count += payload.n;
    },
    del(state, payload) {
      state.count -= payload.de;
    },
    sumF(state, payload) {
      state.sum += payload.add;
    },
    // todolist
    handleAdd(state, item) {
      state.list = [...state.list, item];
    },
    handleUpdateFilter(state, filter) {
      state.filter = filter;
    },
    handleToggle(state, id) {
      state.list = state.list.map(
        obj => (obj.id === id ? { ...obj, status: !obj.status } : obj)
      );
    },
    handleRemove(state, id) {
      state.list = state.list.filter(obj => obj.id !== id);
    }
  },
  actions: {
    addAction({ commit, dispatch }) {
      setTimeout(() => {
        commit("add", { n: 5 });
        dispatch("textAction", { test: "111" });
      });
    },
    textAction(context, obj) {
      console.log(this.state.isShow);
    }
  }
});

export default store;
