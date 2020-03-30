<template>
  <div id="header-out">
    <div class="header-elements">
      <div class="header-logo">
        <router-link to="/home"><img src="./../assets/espatodea.png" style="width: 110px;height:110px;"></router-link>
      </div>
      <div class="header-menu">
        <ul>
          <router-link to="/post/form" class="no-decoration"><li>Meio Ambiente</li></router-link>
          <router-link to="/home" class="no-decoration"><li>Entretenimento</li></router-link>
          <router-link to="/post/form" class="no-decoration"><li>Alimentação</li></router-link>
          <router-link to="/post/form" class="no-decoration"><li>Entenda mais</li></router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import router from './router.js'
export default {
  router: router
}
</script>

<style>
ul {
  list-style-type: none;
  display: flex;
}
li {
  margin-right: 10px;
  padding: 5px;
}
.no-decoration {
  text-decoration: none;
  color: white;
}
#header-out {
  width: 100%;
  height: 80px;
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
  margin-left: 10%;

  color: white;
}
.header-menu {
  margin-right: 10%;
  font-family: "Quicksand Light";
}
@font-face {
  font-family: "Quicksand Light";
  src: url("./../assets/fonts/Quicksand_Light.otf") format("otf");
}
</style>