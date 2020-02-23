import { i18n } from '../../plugins/i18n/i18n';
var instance = i18n._vm;

const state = {
    items: [],
    showItems: false,
    idActiv: 0,
    drawer: false,
    mdAndDown: false,
    smAndDown: false,
    showBisMenuDown: false,
    showMainMenuDown: false,
    language: 0, // 0=en,1=cz
};
const getters = {
    items: state => {
        return state.items;
    },
    showItems: state => {
        return state.showItems;
    },
    idActiv: state => {
        return state.idActiv;
    },
    drawer: state => {
        return state.drawer;
    },
    mdAndDown: state => {
        return state.mdAndDown;
    },
    smAndDown: state => {
        return state.smAndDown;
    },
    showBisMenuDown: state => {
        return state.showBisMenuDown;
    },
    showMainMenuDown: state => {
        return state.showMainMenuDown;
    },
    language: state => {
        return state.language;
    }
};
const mutations = {
    'TOGGLE_LANGUAGE' (state) {
        if (state.language === 1)
            state.language = 0; //en
        else {
            state.language = 1; //cz
        }
    },
    'SET_SUBMENU' (state, menu) {
        state.showItems = !state.showItems;
        if (state.showItems) {
            state.items = menu.items;
            state.idActiv = menu.id;
        } else if (state.idActiv == menu.id) {
            state.items = [];
            state.idActiv = 0;
        } else {
            state.showItems = !state.showItems;
            state.items = menu.items;
            state.idActiv = menu.id;
        }
    },
    'SET_MD_AND_DOWN' (state, mdAndDown) {
        state.mdAndDown = mdAndDown;
    },
    'SET_SM_AND_DOWN' (state, smAndDown) {
        state.smAndDown = smAndDown;
    },
    // toggle drawer, toggle sandwich menu
    'TOGGLE_DRAWER' (state) {
        state.drawer = !state.drawer;
        if (state.drawer) {
            state.showBisMenuDown = true;
            if (state.mdAndDown) {
                state.showMainMenuDown = true;
            }
        } else {
            state.showBisMenuDown = false;
            if (state.mdAndDown) {
                state.showMainMenuDown = false;
            }
        }
    }
};
const actions = {
    setSubmenu: ({ commit }, menu) => {
        commit('SET_SUBMENU', menu);
    },
    set_MdAndDown({ commit }, mdAndDown) {
        commit('SET_MD_AND_DOWN', mdAndDown);
    },
    set_SmAndDown({ commit }, smAndDown) {
        commit('SET_SM_AND_DOWN', smAndDown);
    },
    toggleDrawer: ({ commit }) => {
        commit('TOGGLE_DRAWER');
    },
    toggleLanguage: ({ commit }, instance) => {
        commit('TOGGLE_LANGUAGE', instance);
        i18n.locale = state.language;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}