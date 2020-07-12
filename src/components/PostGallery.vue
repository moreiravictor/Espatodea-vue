<template>
  <div id="post-gallery-outter">
    <div class="post-gallery-upper">
      <div class="post-gallery-title">{{gallery_title}}</div>
      <div class="wrapper" style="position: relative;">
        <input class="post-gallery-search" placeholder="Buscar post" type="text" v-model="post_title" @keypress.enter="getByTitle(post_title)"/>
        <font-awesome-icon class="search-icon" :icon="['fa', 'search']" @click="getByTitle(post_title)"/>
      </div>
    </div>
    <div class="post-gallery-inner">
      <div v-for="(post, index) in posts_paginated" v-bind:key="index" class="post-item">
        <router-link :to="{name: 'post', params: {post_id: post.post_id}}" class="post-item-a">
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
      qt_page: 9,
      post_title: "",
      gallery_title: ''
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
      }).catch( () => {
        this.$alert('Ainda não temos nenhum post nesta categoria', 'Desculpe-nos', 'warning').then( () => this.$router.push('/'));
        });
    },
    getByTitle(post_title) {
      postCaller.getByTitle(post_title).then(res => {
        this.posts = res;
        this.posts_data = res.data.data;
      }).catch( () => {
        this.$alert('Nenhum post com este título', 'Desculpe-nos', 'warning');
        });
    },
    prepareDate(date) {
      let date_converted = new Date(date);
      return `${date_converted.getDate()}/${date_converted.getMonth()+1}/${date_converted.getFullYear()}`;
    },
    postsToShow(value) {
      this.posts_paginated = value;
      window.scrollTo(0,0);
    },
    choosePostCall() {
      (this.$route.params.post_category === 'all') ? this.getAllPosts() : this.getByCategory(this.$route.params.post_category);
    },
    chooseGalleryTitle() {
      switch(this.$route.params.post_category) {
        case ('all'): 
          this.gallery_title = 'Blog';
          break;
        case(1):
          this.gallery_title = 'Comece aqui';
          break;
        case(2):
          this.gallery_title = 'Na prática';
          break;
        case(3):
          this.gallery_title = 'Entenda mais';
          break;
        case(4):
          this.gallery_title = 'Alimentação';
          break;
        case(5):
          this.gallery_title = 'Projetos';
          break;
        case(6):
          this.gallery_title = 'Dicas práticas';
          break;
        case(7):
          this.gallery_title = 'Dicas de alimentação';
          break;
        case(8):
          this.gallery_title = 'Receitas';
          break;
      }
    }
  },
  mounted () {
    this.choosePostCall();
    this.chooseGalleryTitle();
  },
  watch: {
    $route: function(){
      this.choosePostCall();
      this.chooseGalleryTitle();
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
.post-gallery-upper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 74%;
}
.post-gallery-title {
  font-size: 40px;
}
.post-gallery-search {
  border: 1px solid #F3B69B;
  color: #F3B69B;
  border-radius: 10px;
  height: 20px;
  width: 100%;
  background-color:transparent;
  font-family: 'FontAwesome';
  padding-left: 5px;
}
.post-gallery-search::placeholder {
  color: #F3B69B;
}
.post-gallery-search:focus {
  outline: none;
}
.search-icon {
  color: #F3B69B; 
  position: absolute; 
  right: 0.4vw;
  top: 4px;
  cursor: pointer;
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
  width: 20.5vw;
  height: 20.5vw;
}
.post-item-date {
  font-size: 1.2vw;
}

@font-face {
  font-family: "Quicksand Light";
  src: url("./../assets/fonts/Quicksand_Light.otf");
}

@media(max-width: 670px) {
  .post-item {
      width:46%;
  }
  .post-item-title, .post-item-date {
    font-size: 3vw;
  }
  .post-item-image {
    width: 35vw;
    height: 35vw;
  }
}
@media(max-width: 520px) {
  .post-item {
      width:100%;
  }
  .post-item-title, .post-item-date {
    font-size: 4vw;
  }
  .post-item-image {
    width: 60vw;
    height: 60vw;
  }
  .post-gallery-upper {
    flex-direction: column;
  }
  .post-gallery-title {
    margin-bottom: 5px;
  }
}
</style>