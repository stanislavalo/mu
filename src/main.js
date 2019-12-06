import Vue from 'vue'
import VueResource from 'vue-resource';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from './App.vue';
import router from './router/index.js'

import store from './store/store';
import { i18n } from './plugins/i18n/i18n';

Vue.use(Vuetify);
Vue.use(VueResource);
Vue.filter('shape', function(text, length) {
    return text.length > length ? text.slice(0, length) + '...' : text;
});

var vm = new Vue({
    el: '#app',
    router,
    i18n,
    store,
    render: h => h(App)
});