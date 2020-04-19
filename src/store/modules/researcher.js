const state = {
    id: 0,
    nb_grants: 0,
    nb_publications: 0,
};
const getters = {
    id: state => {
        return state.id;
    },
    nb_grants: state => {
        return state.nb_grants;
    },
    nb_publications: state => {
        return state.nb_publications;
    }
};
const mutations = {
    'SET_ID' (state, id) {
        state.id = id;
    },
    'SET_NB_GRANTS' (state, nb_grants) {
        state.nb_grants = nb_grants;
    },
    'SET_NB_PUBLICATIONS' (state, nb_publications) {
        state.nb_publications = nb_publications;
    }
};
const actions = {
    setId: ({ commit }, id) => {
        commit('SET_ID', id);
    },
    setNbGrants: ({ commit }, nb_grants, ) => {
        commit('SET_NB_GRANTS', nb_grants);
    },
    setNbPublications: ({ commit }, nb_publications) => {
        commit('SET_NB_PUBLICATIONS', nb_publications)
    }
};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}