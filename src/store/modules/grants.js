import allGrants from '../../data/grants/grantsList';

const state = {
    selectedYear: new Date().getFullYear() - 2,
    typeGrant: 1,
    typeGrantChanged: false,
    grants: [],
    allGrants: allGrants,
};
const getters = {
    selectedYear: state => {
        return state.selectedYear;
    },
    typeGrant: state => {
        return state.typeGrant;
    },
    typeGrantChanged: state => {
        return state.typeGrantChanged;
    },
    grants: state => {
        return state.grants;
    },
    allGrants: state => {
        return state.allGrants;
    },
};
const mutations = {
    'INIT_GRANTS' (state) {
        var grantsData = [];
        var d = new Date();
        var m = d.getMonth() + 1;
        var df = d.getFullYear() + '-' + m + '-' + d.getDate();
        var condition = '>="' + df + '"';
        console.log('to_date' + condition);
        state.allGrants.forEach(function(element) {
            if (element.to_date >= df) {
                grantsData.push(element);
            }
        });
        state.grants = grantsData;
    },
    'SET_GRANTS_YEAR' (state, year) {
        state.selectedYear = year;
        var df = year + '-01-01';
        var yyyy = new Date().getFullYear();
        var dto = (yyyy - 1) + '-12-31';
        console.log('to_date <= ' + dto);
        var grantsData = [];
        state.allGrants.forEach(function(element) {
            if (element.from_date >= df && element.to_date <= dto)
                grantsData.push(element);
        });
        state.grants = grantsData;
    },
    'SET_TYPE' (state, type) {
        console.log('set type= ' + type);
        if (type != state.typeGrant) {
            state.typeGrantChanged = true;
        }
        state.typeGrant = type;
    }

};
const actions = {
    initGrants: ({ commit }) => {
        commit('INIT_GRANTS');
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