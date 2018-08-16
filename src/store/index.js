import Vue from "vue";
import Vuex from "vuex";
import pages from "./modules/pages";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    pages
  },
  strict: debug,
  plugins: []
});
