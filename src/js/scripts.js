// NPM Dependencies
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

// Router Config Import
import routerConfig from './router-config.js';

// Global Components Import
import navbar from './navbar.vue';

// Tell Vue to use Packages
Vue.use(VueResource);
Vue.use(VueRouter);

// Set Global Configuration
window.app = {
  env: {
    url: document.querySelector('html').getAttribute('data-url'),
  },
};

// Instantiate Vue-Router
const router = new VueRouter({ hashbang: false, linkActiveClass: 'active' });
router.map(routerConfig.map);

// Base Vue Instance
const vueContainer = Vue.extend({
  components: {
    navbar,
  },
});

// Start Router Application
router.start(vueContainer, 'html');
