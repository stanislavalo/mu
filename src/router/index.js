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
   console.log('ROUTER '+ store.state.header.language );
  // console.log('locale='+i18n.locale);
  i18n.locale = store.state.header.language;
  console.log('locale1='+i18n.locale);
  next();
  
});

export default router;