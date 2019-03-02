import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
    textVal: ""
  },
  getters: {
    counter(state) {
      return state.counter;
    },
    doubleCounter(state) {
      return state.counter * 2;
    },
    textVal(state) {
      return state.textVal;
    }
  },
  mutations: {
    increment(state, payload) {
      state.counter += payload;
    },
    decrement(state, payload) {
      state.counter -= payload;
    },
    randomize(state) {
      state.counter = Math.floor(Math.random() * 10 + 1);
    },
    updateText(state, payload) {
      state.textVal = payload;
    }
  },
  //   dobra je praksa koristiti samo akcije umesto mutations ugl, tj koristiti mapActions i vrapovati mutacije akcijama
  actions: {
    increment({ commit }, payload) {
      setTimeout(() => {
        commit("increment", payload.by);
      }, payload.dur);
    },
    decrement(context, payload) {
      setTimeout(() => {
        context.commit("decrement", payload.by);
      }, payload.dur);
    },
    updateText({ commit }, payload) {
      setTimeout(() => commit("updateText", payload), 250);
    }
  }
});
