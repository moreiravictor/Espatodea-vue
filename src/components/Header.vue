<template>
  <div id="header-out">
    <div class="header-elements">
      <div class="header-logo">Espatodea</div>
      <div class="header-menu">
        <ul>
          <router-link to="/post/form" class="no-decoration"><li>Post Form</li></router-link>
          <router-link to="/home" class="no-decoration"><li>Test Component</li></router-link>
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
  border: 1px solid white;
}
.no-decoration {
  text-decoration: none;
  color: white;
}
#header-out {
        width: 100%;
        height: 80px;
        background-color: darksalmon;
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
  margin-left: 50px;

  color: white;
}
.header-menu {
  margin-right: 200px;
}
</style>