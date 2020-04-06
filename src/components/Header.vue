<template>
  <div id="header-out">
    <div class="header-elements">
      <div class="header-logo">
        <router-link to="/"><img src="./../assets/espatodea.png" class="logo"></router-link>
      </div>
      <div class="header-menu">
        <ul class="ul-outter">
          <router-link :to="{name:'gallery', params: {post_category: 'all'}}" class="no-decoration">
            <li class="li-outter">blog</li>
          </router-link>
          <router-link :to="{name:'gallery', params: {post_category: 0}}" class="no-decoration">
            <li class="li-outter" @mouseleave="displaySubEnv = hideSubMenu()" @mouseover="displaySubEnv = displaySubMenu()">meio ambiente</li>
            <ul class="ul-inner" @mouseleave=" displaySubEnv = hideSubMenu()" @mouseover="displaySubEnv = displaySubMenu()" :style="{display: displaySubEnv}">
              <router-link :to="{name:'gallery', params: {post_category: 1}}" class="no-decoration">
                <li class="li-inner">Dicas de Meio Ambiente</li>
              </router-link>
              <router-link :to="{name:'gallery', params: {post_category: 2}}" class="no-decoration">
                <li class="li-inner" @mouseleave="displaySubSubEnv = hideSubMenu()" @mouseover="displaySubSubEnv = displaySubMenu()">Projetos</li>
              </router-link>
                <ul class="ul-inner" @mouseleave="displaySubSubEnv = hideSubMenu()" @mouseover="displaySubSubEnv = displaySubMenu()" :style="{display: displaySubSubEnv}">
                <router-link :to="{name:'gallery', params: {post_category: 3}}" class="no-decoration">
                  <li class="li-inner">Nossos Projetos</li>
                </router-link>
                <router-link :to="{name:'gallery', params: {post_category: 4}}" class="no-decoration">
                  <li class="li-inner">Outros Projetos</li>
                </router-link>
            </ul>
            </ul>
          </router-link>
          <router-link :to="{name:'gallery', params: {post_category: 5}}" class="no-decoration">
            <li class="li-outter">entretenimento</li>
          </router-link>
          <router-link :to="{name:'gallery', params: {post_category: 6}}" class="no-decoration">
            <li class="li-outter" @mouseleave="displaySubAli = hideSubMenu()" @mouseover="displaySubAli = displaySubMenu()">alimentação</li>
            <ul class="ul-inner" @mouseleave=" displaySubAli = hideSubMenu()" @mouseover="displaySubAli = displaySubMenu()" :style="{display: displaySubAli}">
              <router-link :to="{name:'gallery', params: {post_category: 7}}" class="no-decoration">
                <li class="li-inner">Dicas de alimentação</li>
              </router-link>
              <router-link :to="{name:'gallery', params: {post_category: 8}}" class="no-decoration">
                <li class="li-inner">Receitas</li>
              </router-link>
            </ul>
          </router-link>
          <router-link :to="{name:'gallery', params: {post_category: 9}}" class="no-decoration">
            <li class="li-outter">entenda mais</li>
          </router-link>
          <router-link :to="{name:'gallery', params: {post_category: 10}}" class="no-decoration">
            <li class="li-outter">comece aqui</li>
          </router-link>
          <router-link to="/post/form" class="no-decoration">
            <li v-if="user !== 0" class="li-outter">admin tools</li>
          </router-link>
        </ul>
      <div class="header-social">
          <a href="https://www.facebook.com/ecoespatodea" target="_blank" title="nosso facebook">
            <font-awesome-icon class="header-icon" :icon="['fab', 'facebook']" />
          </a>
          <a href="https://www.instagram.com/ecoespatodea/" target="_blank" title="nosso instagram">
            <font-awesome-icon class="header-icon" :icon="['fab', 'instagram']" />
          </a>
          <a href="https://github.com/moreiravictor" target="_blank" title="nosso desenvolvedor">
            <font-awesome-icon class="header-icon" :icon="['fab', 'github']" />
          </a>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from './router.js';

export default {
  router: router,
  data() {
    return {
      displaySubEnv: 'none',
      displaySubSubEnv: 'none',
      displaySubAli: 'none',
      get user() {return localStorage.getItem('user') || 0} 
    }
  },
  methods: {
    displaySubMenu() {
      return 'block';
    },
    hideSubMenu() {
      return 'none';
    }
  }

}
</script>

<style>
#header-out {
  width: 100%;
  height: 115px;
  background-color: #F3B69B;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}
.header-elements {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
.header-logo {
  animation-name: emerge;
  animation-duration: 2s;
  margin-left: 10%;

  color: white;
}
.logo {
  width: 150px;
  height: 150px;
}
.header-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5%;
  font-family: "Quicksand Light";
  font-size: 20px;
}
.ul-outter {
  list-style-type: none;
  display: flex;
  padding-right: 20px;
}
.li-outter {
  margin-right: 10px;
  padding: 5px;
}
.ul-inner {
  list-style-type: none;
  position: absolute;
  padding: 0;
  background-color: #F3B69B;
  z-index: 1;
}
.li-inner {
  border: 1px solid #F2D8CD;
  text-align: center;
  padding: 1px;
  font-size: 18px;
}
.li-inner:hover {
  background-color: #F2D8CD;
}
.no-decoration {
  text-decoration: none;
  color: white;
}
.header-icon {
  padding-right: 20px;
  color: white;
  cursor: pointer;
}
@font-face {
  font-family: "Quicksand Light";
  src: url("./../assets/fonts/Quicksand_Light.otf") format("otf");
}
</style>