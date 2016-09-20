<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h2>{{ page.title.rendered }}</h2>
        <h4>Created On: {{ page.date }}</h4>
        {{{ page.content.rendered }}}
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';

  export default {
    data() {
      return {
        page: {
          title: {
            rendered: ''
          },
          content: {
            rendered: '',
          },
          date: '',
        }
      };
    },
    methods: {
      getSinglePageData() {
        Vue.http.get(`/wp-json/wp/v2/pages/${this.$route.params.page_id}`).then(
          (request) => { this.page = request.data },
          (request) => { console.log(request); }
        );
      }
    },
    created() {
      this.getSinglePageData();
    },
  }
</script>
