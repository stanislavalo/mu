import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

import store from '../store/store';
import { i18n } from '../plugins/i18n/i18n.js';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});
router.beforeEach((to, from, next) => {
  i18n.locale = store.state.header.language;
  next();
  
});

export default router;