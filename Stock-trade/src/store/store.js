import Vue from "vue";
import Vuex from "vuex";
import stockModule from "./modules/stocks";
import portfolioModule from "./modules/portfolio";
import * as actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  modules: {
    stockModule,
    portfolioModule
  }
});
