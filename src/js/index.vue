export default {
  data() {
    return {
      message: 'hello world',
      posts: [],
      headerMenu: [],
    };
  },
  methods: {
    getPostData() {
      Vue.http.get(`${window.app.env.url}/wp-json/wp/v2/posts`).then(
        (request) => { this.posts = request.data; },
        (request) => { console.log(request); }
      );
    },
    getNavMenu() {
      Vue.http.get(`${window.app.env.url}/wp-json/wp-api-menus/v2/menu-locations/header-menu`).then(
        (request) => { this.headerMenu = request.data; },
        (request) => { console.log(request); }
      );
    },
  },
  ready() {
    this.getPostData();
    this.getNavMenu();
  },
};
