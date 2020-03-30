<template>
    <div><carousel 
    :paginationEnabled="true" :paginationActiveColor="'#F3B69B'" 
    :paginationPosition="'bottom-overlay'" :paginationColor="'rgba(243, 182, 155, .4)'" 
    :autoplay=true :autoplayTimeout=4000
    :centerMode=true :perPage="1" :loop=true 
    :scrollPerPage="true" :speed=2000>
        <slide><img src="./../assets/lixo.jpg" class="carousel-img"/></slide>
        <slide><img src="./../assets/lixo.jpg" class="carousel-img"/></slide>
        <slide><img src="./../assets/lixo.jpg" class="carousel-img"/></slide>
        </carousel></div>
  
</template>

<script>
import Vue from 'vue'
import VueCarousel from 'vue-carousel';
import {Carousel, Slide } from 'vue-carousel';
Vue.use(VueCarousel);

export default {
    components: {
        Carousel,
        Slide
    },
}

</script>

<style>
.VueCarousel-slide {
  position: relative;
  background: #42b983;
  color: #fff;
  min-height: 300px;
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