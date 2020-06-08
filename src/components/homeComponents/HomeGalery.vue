<template>
  <div id="homeGallery-outter">
      <div class="gallery-inner">
        <div v-for="(item, index) in items" :key="index" class="gallery-item">
          <div class ="item-img">
            <img class="img-in" :src="imagePath(item.image)"/>
            <div class="middle">
              <router-link :to="item.route" class="text-router">
                <div class="img-in-text">Entenda melhor</div>
              </router-link>
            </div>
          </div>
          <div class="lower-gallery-item">
            <div class="item-title"> {{item.title}} </div>
            <div class="item-text"> {{item.text}} </div>
            <router-link :to="item.route" class="text-router"> <button class="item-button"> {{item.buttonText}} </button> </router-link>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          image:"feature",
          title: "Dicas de alimentação",
          text: "Mês passado meu celular parou de pegar, então eu comprei um novo.",
          buttonText: "Entenda!",
          route: "/post/gallery/all"
        },
        {
          image:"feature2",
          title: "Nossos projetos",
          text: "Quando se fala de sustentabilidade logo pensamos em reciclagem e replantar árvores.",
          buttonText: "Entenda!",
          route: "/post/gallery/all"
        },
        {
          image:"feature3",
          title: "Meio ambiente",
          text: "Muito se fala sobre energias renováveis e sua importância não só para o meio-ambiente.",
          buttonText: "Entenda!",
          route: "/post/gallery/all"
        }
      ]
    }
  },
  methods: {
    imagePath(image) {
      return require('./../../assets/' + image +'.jpg')
    }
  }

}
</script>

<style>
#homeGallery-outter {
  width: 100%;
  font-family: "Quicksand Light";
  margin-bottom: 2%;
}
.gallery-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0% 7% 0% 7%;
}
.gallery-item {
  display: flex;
  flex-direction: column;
  width:30%;
}
.item-img {
  position: relative;
}
.img-in {
  opacity: 1;
  transition: .8s ease;
  width: 100%;
  height: 100%;
}
.item-img:hover .img-in {
  opacity: 0.3;
}
.img-in-text {
  width: 100%;
  font-size: 3vw;
}
.middle {
  width:100%;
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  font-size: 50px;
  text-align: center;
  color: black;
}
.text-router {
  text-decoration: none;
  color: black;
}
.item-img:hover .middle {
  opacity: 1;
  cursor: pointer;
}
.lower-gallery-item {
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item-title {
  font-weight: bold;
  font-size: 26px;
  padding-bottom: 15px;
}
.item-text {
  font-size: 18px;
  padding-bottom: 20px;
}
.item-button {
  margin-bottom: 10px;
  font-family: "Quicksand Light";
  font-size: 2vw;
  width: fit-content;
  height: fit-content;
  background-color: white;
  border: 1px solid #F3B69B;
  display: none;
  text-decoration: none;
}

@font-face {
  font-family: "Quicksand Light";
  src: url("./../../assets/fonts/Quicksand_Light.otf") format("otf");
}
@media(max-width: 1024px) {
  .item-title {
    font-size: 22px;
    padding-bottom: 7px;
  }
  .item-text {
    font-size: 16px;
    padding-bottom: 6px;
  }

}
@media(max-width: 739px) {
  .item-title {
    font-size: 2vw;
  }
  .item-text {
    display: none;
  }
  .item-button {
    display: flex;
    text-decoration: none;
  }
}

@media(max-width: 425px) {
  .img-in {
    opacity: 1;
    transition: .5s ease;
  }
  .item-img:hover .img-in {
    opacity: 0.3;
  }
  .item-title {
    text-align: left;
    font-size: 10px;
    padding-bottom: 7px;
  }
  .item-text {
    font-size: 10px;
    padding-bottom: 6px;
  }

}
</style>