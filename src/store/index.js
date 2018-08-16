import Vue from "vue";
import Vuex from "vuex";
import pages from "./modules/pages";
import progress from "./modules/progress";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    pages,
    progress
  },
  strict: debug,
  plugins: []
});
