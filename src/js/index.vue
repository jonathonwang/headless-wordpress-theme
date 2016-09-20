<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-6 well" v-for="post in posts">
        <a v-link="{ path: `post/${post.id}` }">
          <h2>
            {{ post.title.rendered }}
          </h2>
        </a>
        {{{ post.content.rendered }}}
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';

export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPostData() {
      Vue.http.get(`${window.app.env.url}/wp-json/wp/v2/posts`).then(
        (request) => { this.posts = request.data; },
        (request) => { console.log(request); }
      );
    },
  },
  ready() {
    this.getPostData();
  },
};
</script>
