import Vue from 'vue';
import Vuex from 'vuex';

import header from './modules/header';
import publication from './modules/publication';
import grants from './modules/grants';
import researcher from './modules/researcher';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        header,
        publication,
        grants,
        researcher
    }
});

export default store;