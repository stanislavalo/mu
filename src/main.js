import Vue from 'vue'
import VueResource from 'vue-resource';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from './App.vue';
import router from './router/index.js'

import store from './store/store';
import { i18n } from './plugins/i18n/i18n';
import moment from 'moment';
import 'bulma/css/bulma.css';
import 'leaflet/dist/leaflet.css';

Vue.use(Vuetify);
Vue.use(VueResource);
Vue.use(moment);

Vue.filter('shape', function(text, length) {
    return text.length > length ? text.slice(0, length) + '...' : text;
});
Vue.filter('dateEU', function(date, formater) {
    return moment(date).format(formater);
});

var vm = new Vue({
    el: '#app',
    router,
    i18n,
    store,
    render: h => h(App),
})