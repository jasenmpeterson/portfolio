import api from "../../api";
import * as types from "../mutation-types";

// initial state
const state = {
  all: [],
  loaded: false,
  page: null,
  pageName: null
};

const getters = {
  allPages: state => state.all,
  allPagesLoaded: state => state.loaded,
  pageContent: state => state.page
};

// actions
const actions = {
  async getAllPages({ commit }) {
    return new Promise(resolve => {
      api.getPages(pages => {
        resolve(pages);
        commit(types.STORE_FETCHED_PAGES, { pages });
        commit(types.PAGES_LOADED, true);
        commit(types.INCREMENT_LOADING_PROGRESS);
      });
    });
  },
  async getPage({ commit, dispatch, state }, id) {
    await dispatch("getAllPages");
    commit(types.STORE_FETCHED_PAGE, { state, id });
  }
};

// mutations
const mutations = {
  [types.STORE_FETCHED_PAGES](state, { pages }) {
    state.all = pages;
  },
  [types.PAGES_LOADED](state, val) {
    state.loaded = val;
  },
  [types.STORE_FETCHED_PAGE](state, data) {
    let singlePage = data.state.all.filter(content => content.uid === data.id);
    state.page = singlePage;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
