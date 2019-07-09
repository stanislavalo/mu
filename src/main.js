import Vue from 'vue'
//import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css' ;

import App from './App.vue';
import router from './router/index.js'
//import { routes } from './router/routes';
import store from './store/store';
import { i18n } from './plugins/i18n/i18n';

Vue.use(Vuetify);
Vue.use(VueResource);

var vm = new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
});

