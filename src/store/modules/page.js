import api from "../../api";
import * as types from "../mutation-types";

// initial state
const state = {
  all: [],
  loaded: false,
  page: null
};

const getters = {
  allPages: state => state.all
};

// actions
const actions = {
  getAllPages({ commit }) {
    api.getPages(pages => {
      commit(types.STORE_FETCHED_PAGES, { pages });
    });
  }
};

// mutations
const mutations = {
  [types.STORE_FETCHED_PAGES](state, { pages }) {
    state.all = pages;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
