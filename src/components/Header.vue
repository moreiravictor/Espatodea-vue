<template>
  <div id="header-out">
    <div class="header-web-mobile-out">
      <div class="header-elements">
        <div class="header-logo">
          <router-link to="/"><img src="./../assets/espatodeaGrosso.png" class="logo"></router-link>
        </div>
        <div class="header-menu">
          <ul class="ul-outter">
            <router-link v-for="item in menu" v-bind:key="item.title" :to="{name:'gallery', params: {post_category: item.post_category}}" class="no-decoration">
              <li class="li-outter" @mouseleave="item.displaySub = hideSubMenu()" @mouseover="item.displaySub = displaySubMenu()"> {{item.title}}</li>
                <ul v-if="item.submenu" class="ul-inner" @mouseleave=" item.displaySub = hideSubMenu()" @mouseover="item.displaySub = displaySubMenu()" :style="{display: item.displaySub}">
                  <router-link v-for="sub in item.submenu" v-bind:key="sub.title" :to="{name:'gallery', params: {post_category: sub.post_category}}" class="no-decoration">
                    <li class="li-inner" @mouseleave="sub.displaySub = hideSubMenu()" @mouseover="sub.displaySub = displaySubMenu()">{{sub.title}}</li>
                      <ul v-if="sub.submenu" class="ul-inner-inner" @mouseleave="sub.displaySub = hideSubMenu()" @mouseover="sub.displaySub = displaySubMenu()" :style="{display: sub.displaySub}">
                        <router-link v-for="subsub in sub.submenu" v-bind:key="subsub.title" :to="{name:'gallery', params: {post_category: subsub.post_category}}" class="no-decoration">
                          <li class="li-inner">{{subsub.title}}</li>
                        </router-link>
                      </ul>
                  </router-link>
                </ul>
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
        <div class="menu-mobile-button" @click="showMenu()">
          <font-awesome-icon class="mobile-icon" :icon="['fas', 'bars']"/>
        </div>
      </div>
      <div class="mobile-menu" :style="{display: menu_mobile}">
        <div class="mobile-menu-inner">
          <ul class="mobile-menu-ul">
            <div id="mobile-inner-outter" v-for="it in menu" v-bind:key="it.title">
              <div class="mobile-inner-inner">
                <router-link :to="{name:'gallery', params: {post_category: it.post_category}}" class="no-decoration">
                  <li class="mobile-li-outter" @click="showMenu()">{{it.title}}</li>
                </router-link>
                <font-awesome-icon @click="it.displaySub = (it.displaySub == 'none') ? displaySubMobile() : hideSubMenu()" v-if="it.submenu" :icon="(it.displaySub == 'none') ? subicons.down : subicons.up" class="mobile-submenu-icon"/>
              </div>
              <ul v-if="it.submenu" class="mobile-menu-ul-inner" :style="{display: it.displaySub}">
                  <div v-for="sub in it.submenu" v-bind:key="sub.title">
                    <div class="mobile-submenu-div">
                    <router-link :to="{name:'gallery', params: {post_category: sub.post_category}}" class="no-decoration">
                      <li class="mobile-li-inner" @click="showMenu(), sub.displaySub=hideSubMenu(), it.displaySub = hideSubMenu()">{{sub.title}}</li>
                    </router-link>
                    <font-awesome-icon @click="sub.displaySub = (sub.displaySub == 'none') ? displaySubMobile() : hideSubMenu()" v-if="sub.submenu" :icon="(sub.displaySub == 'none') ? subicons.down : subicons.up" class="mobile-submenu-icon"/>
                    </div>
                      <ul v-if="sub.submenu" class="mobile-ul-inner-inner" :style="{display: sub.displaySub}">
                        <router-link v-for="subsub in sub.submenu" v-bind:key="subsub.title" :to="{name:'gallery', params: {post_category: subsub.post_category}}" class="no-decoration">
                          <div @click="showMenu(), sub.displaySub=hideSubMenu(), it.displaySub = hideSubMenu()" class="mobile-subsubmenu-div">
                            <li class="mobile-li-inner-inner">{{subsub.title}}</li>
                          </div>
                        </router-link>
                      </ul>
                  </div>
                </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from './router.js';
import { Menu } from './commons/menu';
export default {
  router: router,
  data() {
    return {
      displaySubSubEnv: 'none',
      menu_mobile:  'none',
      submenu_mobile: 'none',
      subicons: {
        up: ['fa', 'chevron-up'],
        down: ['fa', 'chevron-down']
      },
      get user() {return localStorage.getItem('user') || 0},
      menu: Menu
    }
  },
  methods: {
    displaySubMenu() {
      return 'block';
    },
    displaySubMobile() {
      return 'contents';
    },
    hideSubMenu() {
      return 'none';
    },
    showMenu() {
      this.menu_mobile = (this.menu_mobile == 'none') ? 'block' : 'none';
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
  margin-bottom: 2%;
}
.header-web-mobile-out {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header-elements {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-logo {
  animation-name: emerge;
  animation-duration: 2s;
  margin-left: 10%;
  color: white;
}
.logo {
  width: 100px;
  height: 100px;
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
.ul-inner {
  list-style-type: none;
  position: absolute;
  z-index: 1;
  width: fit-content;
  padding-left: 0;
  border: 1px solid white;
  background-color: #f2c3af;
}
.ul-inner-inner {
  list-style-type: none;
  position: absolute;
  z-index: 1;
  width: fit-content;
  padding-left: 0;
  border: 1px solid white;
  background-color: #f2c3af;
}
.li-outter {
  margin-right: 10px;
  padding: 5px;
}
.li-outter:hover {
  color: black;
}
.mobile-inner-inner {
  display: flex; 
  justify-content: center;
  align-items: center;
}
.mobile-ul-inner-inner {
  list-style-type: none;
  position: absolute;
  padding: 0;
  background-color: #F3B69B;
  z-index: 1;
  display: contents;
}
.li-inner {
  border: 1px solid #F2D8CD;
  text-align: center;
  padding: 1px;
  font-size: 18px;
}
.li-inner:hover {
  background-color: #f1e2db;
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
.header-icon:hover {
  color: black;
}
.menu-mobile-button {
  display: none;
}
.mobile-menu {
  opacity: 0.9;
  margin-top: 109px;
  height: fit-content;
  width: 100%;
  background-color: #F2D8CD;
  position: absolute;
  z-index: 1;
  animation-name: appear;
  animation-duration: 1s;
}
.mobile-menu-inner {
  display: flex;
  flex-direction: column;
}
.mobile-menu-ul {
  padding-left: 0;
  margin-bottom: 0;
  list-style-type: none; 
  display: flex;
  flex-direction: column; 
  align-items: center;
}
.mobile-menu-ul-inner {
  list-style-type: none;
  flex-direction: column;
  margin-left: 0;
  padding-left: 0;
}
.mobile-submenu-div {
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: appear;
  animation-duration: 1s;
}
.mobile-submenu-icon {
  font-size:5vw;
  line-height:2vh;
  padding-bottom: 0.8vh;
  margin-left:0.5vw;
  color: white;
}
.mobile-subsubmenu-div {
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: appear;
  animation-duration: 1s;
}
#mobile-inner-outter {
  width: 100%;
  text-align: center;
}
#mobile-inner-outter:hover {
  background-color: #F3B69B;
  cursor: pointer;
}
.mobile-li-outter {
  font-size: 10vw;
  margin-bottom: 1vh;
}
.mobile-li-inner {
    font-size: 8vw;
    margin-bottom: 1vh;
    text-align: left;
    text-decoration: none;
}
.mobile-li-inner-inner {
    font-size: 8vw;
    margin-bottom: 1vh;
    text-align: left;
}
@font-face {
  font-family: "Quicksand Light";
  src: url("./../assets/fonts/Quicksand_Light.otf");
}
@keyframes appear {
  from {opacity: 0;}
  to {opacity: 0.9;}
}

@media(max-width: 1344px) {
  .header-menu {
    margin-right: 4%;
    display: flex;
    flex-direction: column;
  }
  .ul-outter {
    padding-right: 0;
    padding-left: 0;
    font-size: 19px;
  }
  .header-social {
    display: flex;
    font-size: 12px;
  }
  .header-social a {
    margin-bottom: 5px;
  }
}
@media(max-width: 1078px) {
  .header-logo {
    margin-left: 1%;
  }
  .header-menu {
    margin-right: 4%;
    display: flex;
    flex-direction: column;
  }
  .ul-outter {
    padding-right: 0;
    padding-left: 0;
    font-size: 19px;
  }
  .header-social {
    display: flex;
    font-size: 12px;
  }
  .header-social a {
    margin-bottom: 5px;
  }
}
@media(max-width: 969px) {
  .header-elements {
    padding: 0px;
  }
  .header-logo {
    margin-left: 1%;
  }
  .header-menu {
    margin-right: 2%;
  }
  .ul-outter {
    padding-right: 0;
    padding-left: 0;
    font-size: 14px;
  }
}
@media(max-width: 769px) {
  .header-menu {
    display: none;
  }
  .menu-mobile-button {
    display: flex;
  }
  .mobile-icon {
    padding-right: 20px;
    color: white;
    cursor: pointer;
    font-size: 36px;
  }
}
</style>