import Vue from 'vue';
import Vuex from 'vuex';

import header from './modules/header';
import publication from './modules/publication';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        header,
        publication,
    }
});

export default store;