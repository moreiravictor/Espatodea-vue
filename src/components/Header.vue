<template>
  <div id="header-out">
    <div class="header-elements">
      <div class="header-logo">
        <router-link to="/"><img src="./../assets/espatodea.png" class="logo"></router-link>
      </div>
      <div class="header-menu">
        <ul>
          <router-link to="/post/all" class="no-decoration"><li>blog</li></router-link>
          <router-link to="/post/form" class="no-decoration"><li>meio ambiente</li></router-link>
          <router-link to="/" class="no-decoration"><li>entretenimento</li></router-link>
          <router-link to="/" class="no-decoration"><li>alimentação</li></router-link>
          <router-link to="/" class="no-decoration"><li>entenda mais</li></router-link>
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
  router: router
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
ul {
  list-style-type: none;
  display: flex;
  padding-right: 20px;
}
li {
  margin-right: 10px;
  padding: 5px;
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