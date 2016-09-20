<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Brand</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li v-for="navItem in headerMenu" v-link-active><a v-link="{ path: `/page/${navItem.object_id}` }">{{ navItem.title }}</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
  import Vue from 'vue';

  export default {
    data() {
      return {
        headerMenu: [],
      };
    },
    methods: {
      getNavMenu() {
        Vue.http.get(`${window.app.env.url}/wp-json/wp-api-menus/v2/menu-locations/header-menu`).then(
          (request) => { this.headerMenu = request.data; },
          (request) => { console.log(request); }
        );
      },
    },
    ready() {
      this.getNavMenu();
    },
  }
</script>
