import api from "../../api";
import * as types from "../mutation-types";

// initial state
const state = {
  all: [],
  loaded: false,
  page: null,
  pageName: null,
  siteDetails: null
};

const getters = {
  allPages: state => state.all,
  allPagesLoaded: state => state.loaded,
  pageContent: state => state.page,
  websiteDetails: state => state.siteDetails
};

// actions
const actions = {
  async getAllPages({ commit }) {
    return new Promise(resolve => {
      api.getPages(pages => {
        if (pages) {
          resolve(pages);
          commit(types.STORE_FETCHED_PAGES, { pages });
          commit(types.PAGES_LOADED, true);
          commit(types.INCREMENT_LOADING_PROGRESS);
        } else {
          console.log("error");
        }
      });
    });
  },
  async getPage({ commit, dispatch, state }, id) {
    if (!state.all[0]) {
      await dispatch("getAllPages");
    }
    commit(types.STORE_FETCHED_PAGE, { state, id });
  },
  async getSiteDetails({ commit, dispatch, state }) {
    await dispatch("getAllPages");
    commit(types.GET_SITE_DETAILS, { state });
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
  },
  [types.GET_SITE_DETAILS](state, data) {
    let siteDetails = data.state.all.filter(
      content => content.uid === "site_details"
    );
    state.siteDetails = siteDetails;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
