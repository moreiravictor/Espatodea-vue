<template>
  <div id="post-gallery-outter">
    <div class="post-gallery-inner">
      <div v-for="post in posts_data" v-bind:key="post.post_id" class="post-item">
        <router-link to="/" class="post-item-a" href="sei la">
          <img class="post-item-image" :src="post.post_image_path"/>
          <div class="post-item-date">{{prepareDate(post.post_date)}}</div>
          <div class="post-item-title">{{post.title}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { RepositoryFactory } from './../api-calls/RepositoryFactory'
const postCaller = RepositoryFactory.get('posts');
export default {
  data () {
    return {
      posts:{},
      posts_data: {}
    }
  },
  methods: {
    getAllPosts() {
      postCaller.getAll().then(res => {
        this.posts = res;
        this.posts_data = res.data.data;
        });
    },
    prepareDate(date) {
      let date_converted = new Date(date);
      return `${date_converted.getDate()}/${date_converted.getMonth()+1}/${date_converted.getFullYear()}`;
    }
  },
  mounted () {
    this.getAllPosts();
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
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
}
.post-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  width:30%;
  margin: 1%;
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