import * as types from "../mutation-types";

// initial state
const state = {
  error: null,
  notice: null,
  loading: true,
  loading_progress: 0
};

// getters
const getters = {
  isLoading: state => state.loading_progress < 100,
  loadingProgress: state => state.loading_progress,
  loadingIncrement: () => {
    return 100 / window.SETTINGS.LOADING_SEGMENTS;
  }
};

// mutations
const mutations = {
  [types.INCREMENT_LOADING_PROGRESS](state) {
    state.loading_progress = Math.min(
      state.loading_progress + getters.loadingIncrement(),
      100
    );
  },

  [types.RESET_LOADING_PROGRESS](state) {
    state.loading_progress = 0;
  }
};

export default {
  state,
  getters,
  mutations
};
