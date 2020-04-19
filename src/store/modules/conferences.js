import allConferences from '../../data/events/conferences.js';

const state = {
    selectedYear: 2100,
    conferences: [],
    allConferences: allConferences,
};
const getters = {
    selectedYear: state => {
        return state.selectedYear;
    },
    conferences: state => {
        return state.conferences;
    },
    allConferences: state => {
        return state.allConferences;
    },
};
const mutations = {
    'INIT_CONFERENCES' (state) {
        var conferencesData = [];
        var d = new Date();
        var m = d.getMonth() + 1;
        if (m < 10)
            m = '0' + m;
        var dd = d.getDate();
        if (dd < 10)
            dd = '0' + dd;
        var df = d.getFullYear() + '-' + m + '-' + dd; // 00:00:00
        state.allConferences.forEach(function(element) {
            if (element.event_calendar_date_value >= df) {
                conferencesData.push(element);
            }
        });
        state.conferences = conferencesData;
    },
    'SET_ALL_CONFERENCES' (state) {
        state.conferences = state.allConferences;
    },
    'SET_CONFERENCES_YEAR' (state, year) {
        state.selectedYear = year;
        var df = year + '-01-01';
        var dto = year + '-12-31';
        var conferencesData = [];
        state.allConferences.forEach(function(element) {
            if (element.event_calendar_date_value >= df && element.event_calendar_date_value2 <= dto)
                conferencesData.push(element);
        });
        state.conferences = conferencesData;
    },

};
const actions = {
    initConferences: ({ commit }) => {
        commit('INIT_CONFERENCES');
    },
    setAllConferences: ({ commit }) => {
        commit('SET_ALL_CONFERENCES');
    },
    setConferencesYear: ({ commit }, year, ) => {
        commit('SET_CONFERENCES_YEAR', year);
    },
};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}