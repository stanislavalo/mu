const state={
  news: [],
}
const mutations = {
  'SET_NEWS_YEAR' (state, year) {
      var df = year + '-01-01';
      var dto = year + '-12-31';
      var newsData = [];
      state.news = news.Data;
  },
};
const actions = {
setNewsYear: ({ commit }, year, ) => {
      commit('SET_NEWS_YEAR', year);
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  // getters,
}