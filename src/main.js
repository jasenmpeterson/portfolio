window.SETTINGS = {
  LOADING_SEGMENTS: 1
};

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import * as types from "./store/mutation-types";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    this.$store.commit(types.RESET_LOADING_PROGRESS);
    this.$store.dispatch("getAllPages");
    this.$store.dispatch("getSiteDetails");
  },
  render: h => h(App)
}).$mount("#app");
