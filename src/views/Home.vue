<template>
    <div class="home-outter" >
        <carousel 
        :paginationEnabled="true" :paginationActiveColor="'#F3B69B'" 
        :paginationPosition="'bottom-overlay'" :paginationColor="'rgba(243, 182, 155, .4)'" 
        :autoplay=true :autoplayTimeout=4000
        :centerMode=true :perPage="1" :loop=true 
        :scrollPerPage="true" :speed=2000>
            <slide><img src="./../assets/turtle2.jpg" class="carousel-img"/></slide>
            <slide><img src="./../assets/coral.jpg" class="carousel-img"/></slide>
            <slide><img src="./../assets/beauty.jpg" class="carousel-img"/></slide>
        </carousel>
        <div class="banner-outter">
            <div class="banner-img-out"><img src="./../assets/arvore.png" class="banner-img"/></div>
            <div class="banner-text">
                <h2>Quem Somos</h2>
                <p class="banner-text-bigger">
                    Somos um casal que teve uma ideia a partir de um incômodo. Mas qual o incômodo? 
                    Bem... Você sabe plantar o que come? Você sabe reciclar o lixo que produz? Sequer 
                    sabe para onde vai o que não usa mais? Provavelmente não. E isso acontece porque há 
                    séculos estamos vivendo em uma dependência criada por uma relação de tutoria exercida 
                    pelo Estado em conjunto com grandes corporações, em que o indivíduo ou comunidades 
                    menores (como a família) acabaram por perder, com o tempo, sua autonomia dentro da 
                    produção daquilo que serve para satisfazer até mesmo suas necessidades mais fundamentais. 
                    Além disso, nos colocamos no centro do universo e esquecemos do tamanho dele e do que fizemos 
                    ao planeta que chamamos de lar. Nos importamos com tantas coisas superficiais e deixamos de 
                    lado os cuidados com o que nos dá a vida.
                </p>
            </div>
        </div>
    </div>
  
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
  max-height: 550px;
}
.VueCarousel {
    margin-bottom: 40px;
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
.banner-outter {
    display: flex;
    align-items: center;
    width: 100%;
    height: 400px;
    background-color: rgba(243, 182, 155, .4);
}
.banner-img-out {
    border-right: 1px solid white;
    padding-left: 3%;
}
.banner-img {
    width: 300px;
}
.banner-text {
    color: white;
    font-family: "Quicksand Light";
    font-size: 22px;
    padding: 3%;
    padding-right: 10%;
}
.banner-text-bigger {
    color: rgba(0, 0, 0, 0.993);
}

@font-face {
  font-family: "Quicksand Light";
  src: url("./../assets/fonts/Quicksand_Light.otf") format("otf");
}

</style>