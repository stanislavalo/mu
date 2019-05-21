import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css' ;

import App from './App.vue';
import { routes } from './routes';
import store from './store/store';

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
