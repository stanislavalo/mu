const state = {
    id_member: 0,
    department: 0,
    type: 20,
    year: new Date().getFullYear(),
};
const getters = {
    id_member: state => {
        return state.id_member;
    },
    department: state => {
        return state.department;
    },
    type: state => {
        return state.type;
    },
    year: year => {
        return state.year;
    },
};
const mutations = {
    'SET_SEARCH_CRITERIAS' (state, criterias) {
        state.id_member = criterias.selectedMember;
        state.department = criterias.selectedDepartment;
        state.type = criterias.selectedType;
        state.year = criterias.selectedYear;
        console.log('store state=' + state.year);
    },
};
const actions = {
    setSearchCriterias: ({ commit }, criterias, ) => {
        commit('SET_SEARCH_CRITERIAS', criterias);
    },
};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}