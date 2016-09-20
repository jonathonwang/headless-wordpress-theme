<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h2>{{ post.title.rendered }}</h2>
        <h4>{{ post.date }}</h4>
        {{{ post.content.rendered }}}
        <br>
        <a v-link="{ path: '/' }">Back &larr;</a>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';

  export default {
    data() {
      return {
        post: {
          title: {
            rendered: '',
          },
          content: {
            rendered: '',
          },
          date: ''
        }
      };
    },
    methods: {
      getSinglePostData() {
        Vue.http.get(`/wp-json/wp/v2/posts/${this.$route.params.post_id}`).then(
          (request) => { this.post = request.data },
          (request) => { console.log(request); }
        );
      }
    },
    created() {
      this.getSinglePostData();
    },
  }
</script>

