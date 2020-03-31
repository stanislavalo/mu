import Vue from 'vue';
import Vuex from 'vuex';

import header from './modules/header';
import news from './modules/news';
import publication from './modules/publication';
import grants from './modules/grants';
import conferences from './modules/conferences';
import researcher from './modules/researcher';
import visitors from './modules/visitors';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        header,
        news,
        publication,
        grants,
        conferences,
        researcher,
        visitors,
    }
});

export default store;