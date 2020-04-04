<template>
  <div id="post-gallery-outter">
    <div class="post-gallery-inner">
      <div v-for="(post, index) in posts_paginated" v-bind:key="index" class="post-item">
        <router-link :to="{name: 'post', params: {post_id: post.post_id}}" class="post-item-a" href="sei la">
          <img class="post-item-image" :src="post.post_image_path"/>
          <div class="post-item-date">{{prepareDate(post.post_date)}}</div>
          <div class="post-item-title">{{post.title}}</div>
        </router-link>
      </div>
    </div>
    <Pagination v-on:paginationToParent="postsToShow" :data_array="posts_data" :qt_page="qt_page"/>
  </div>
</template>

<script>
import { RepositoryFactory } from './../api-calls/RepositoryFactory'
import Pagination from './Pagination.vue'
const postCaller = RepositoryFactory.get('posts');

export default {
  components: {
    Pagination
  },
  data () {
    return {
      posts:{},
      posts_data: {},
      posts_paginated: {},
      qt_page: 9
    }
  },
  methods: {
    getAllPosts() {
      postCaller.getAll().then(res => {
        this.posts = res;
        this.posts_data = res.data.data;
        });
    },
    getByCategory(category) {
      postCaller.getByCategory(category).then(res => {
        this.posts = res;
        this.posts_data = res.data.data;
      });
    },
    prepareDate(date) {
      let date_converted = new Date(date);
      return `${date_converted.getDate()}/${date_converted.getMonth()+1}/${date_converted.getFullYear()}`;
    },
    postsToShow(value) {
      this.posts_paginated = value;
      window.scrollTo(0,0);
    }
  },
  mounted () {
    (this.$route.params.post_category === 'all') ? this.getAllPosts() : this.getByCategory(this.$route.params.post_category);
  },
  watch: {
    $route: function() {
      (this.$route.params.post_category === 'all') ? this.getAllPosts() : this.getByCategory(this.$route.params.post_category);
    }
  }
}
</script>

<style>
#post-gallery-outter {
  font-family: "Quicksand Light";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.post-gallery-inner {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  width: 80%;
}
.post-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  width:29%;
  margin: 2%;
}
.post-item-a {
  text-decoration: none;
  text-align: center;
  color: #000;
}
.post-item-image {
  width:100%;
}

@font-face {
  font-family: "Quicksand Light";
  src: url("./../assets/fonts/Quicksand_Light.otf") format("otf");
}
</style>