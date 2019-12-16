import grants from '../../data/grants/grantsList';

const state = {
    selectedYear: new Date().getFullYear() - 2,
    typeGrant: 1,
    grants: [],
};
const getters = {
    selectedYear: state => {
        return state.selectedYear;
    },
    typeGrant: state => {
        return state.typeGrant;
    },
    grants: state => {
        return state.grants;
    },
};
const mutations = {
    'INIT_GRANTS' (state, grants) {
        var grantsData = [];
        var d = new Date();
        var m = d.getMonth() + 1;
        var df = d.getFullYear() + '-' + m + '-' + d.getDate();
        var condition = '';
        if (state.typeGrant == 1)
            condition = '>="' + df + '"';
        else
            condition = ' <= "' + df + '"';
        console.log(condition);
        grants.forEach(function(element) {
            if (eval('element.to_date ' + condition)) {
                grantsData.push(element);
            }
        });
        state.grants = grantsData;
    },
    'SET_GRANTS_YEAR' (state, year) {
        state.selectedYear = year;
        var df = year + '-01-01';
        var grantsData = [];
        state.grants.forEach(function(element) {
            if (element.from_date >= df)
                grantsData.push(element);
        });
        state.grants = grantsData;
    },
    'SET_TYPE' (state, type) {
        state.typeGrant = type;
    }

};
const actions = {
    initGrants: ({ commit }) => {
        commit('INIT_GRANTS', grants);
    },
    setGrantsYear: ({ commit }, year, ) => {
        commit('SET_GRANTS_YEAR', year);
    },
    setTypeGrant: ({ commit }, type) => {
        commit('SET_TYPE', type)
    }
};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}