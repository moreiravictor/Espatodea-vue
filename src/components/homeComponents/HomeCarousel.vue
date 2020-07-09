<template>
  <carousel 
        :paginationEnabled="true" :paginationActiveColor="'#406652'" 
        :paginationPosition="'bottom-overlay'" :paginationColor="'rgba(300, 300, 300, 1)'" 
        :autoplay=true :autoplayTimeout=4000
        :centerMode=true :perPage="1" :loop=true 
        :scrollPerPage="true" :speed=2000>
            <slide>
              <router-link to="/"> 
                <img src="./../../assets/banner1.png" class="carousel-img"/> 
              </router-link>
            </slide>
            <slide>
              <router-link to="/post/see/6">
                <img src="./../../assets/banner2.png" class="carousel-img"/> 
              </router-link>
            </slide>
            <slide>
              <router-link to="/"> 
                <img src="./../../assets/banner3.png" class="carousel-img"/>
              </router-link>  
              </slide>
    </carousel>
</template>

<script>
import Vue from 'vue'
import VueCarousel from 'vue-carousel';
import {Carousel, Slide } from 'vue-carousel';
Vue.use(VueCarousel);
export default {
    components: {
        Carousel,
        Slide,
    }

}
</script>

<style>
.VueCarousel-slide {
  position: relative;
  background: #42b983;
  color: #fff;
  max-height:82vh;
}
.VueCarousel {
    margin-bottom: 2%;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.carousel-img {
    width: 100%;
    height: 100%;
}
</style>