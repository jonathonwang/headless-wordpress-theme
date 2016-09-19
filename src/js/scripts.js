// NPM Dependencies
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import routermap from './routermap.js';
import navbar from './navbar.vue';

// Tell Vue to use Packages
Vue.use(VueResource);
Vue.use(VueRouter);

window.app = {
  env: {
    url: document.querySelector('html').getAttribute('data-url'),
  },
};

const router = new VueRouter({ hashbang: false, linkActiveClass: 'active' });
router.map(routermap);
const vueContainer = Vue.extend({});
router.start(vueContainer, 'html');
