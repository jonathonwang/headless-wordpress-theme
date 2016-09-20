// Import Pages
import index from './index.vue';
import page from './page.vue';
import post from './post.vue';

// Assign Pages to Routes
const map = {
  '/': { component: index },
  '/page/:page_id': { component: page },
  '/post/:post_id': { component: post },
};

export default {
  map,
};
