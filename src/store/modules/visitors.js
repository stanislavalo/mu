import visitors from '../../data/people/visiting.js';
import visitors2019 from '../../data/people/visiting2019.js';
import visitors2018 from '../../data/people/visiting2018.js';
import visitors2017 from '../../data/people/visiting2017.js';

var yyyy = new Date().getFullYear();
const state = {
    selectedYear: yyyy,
    visitors:visitors,
    visitorsStay: [
      {y:yyyy,stay:visitors},
      {y:2019,stay:visitors2019},
      {y:2018,stay:visitors2018},
      {y:2017,stay:visitors2017},
    ],
};
const getters = {
    selectedYear: state => {
        return state.selectedYear;
    },
    visitors: state => {
        return state.visitors;
    },
};
const mutations = {
    'SET_VISITORS_YEAR' (state, year) {
      state.selectedYear = year;
      var visitorsData = [];
      state.visitorsStay.forEach(function(element) {
          if (element.y == state.selectedYear)
              visitorsData=element;
      });
      state.visitors = visitorsData.stay;
    },
};
const actions = {
    setVisitorsYear: ({ commit }, year, ) => {
        commit('SET_VISITORS_YEAR', year);
    },
};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}