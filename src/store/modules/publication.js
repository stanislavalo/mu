import typePublication from '../../data/research/typePublication.js';
const state = {
    id_member: 0,
    department: 0,
    type: 20,
    year: new Date().getFullYear(),
    listTypePublication: [],
    typePublication: typePublication,
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
    year: state => {
        return state.year;
    },
    typePublication: state => {
        return state.typePublication;
    },
    listTypePublication: state => {
        state.typePublication.forEach(element => {
            state.listTypePublication[element.id] = element.name;
        });
        return state.listTypePublication;
    },

};
const mutations = {
    'SET_SEARCH_CRITERIAS' (state, criterias) {
        state.id_member = criterias.selectedMember;
        state.department = criterias.selectedDepartment;
        state.type = criterias.selectedType;
        state.year = criterias.selectedYear;
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