import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueResource from "vue-resource";
import store from "./store/store";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.http.options.root = "https://stock-trade-deaca.firebaseio.com/";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
