import Vue from 'vue';
import Vuex from 'vuex';

import header from './modules/header';
import publication from './modules/publication';
import grants from './modules/grants';
import conferences from './modules/conferences';
import researcher from './modules/researcher';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        header,
        publication,
        grants,
        conferences,
        researcher
    }
});

export default store;