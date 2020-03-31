<template>
  <div id="homeGallery-outter">
      <div class="gallery-inner">
        <div v-for="(item, index) in items" :key="index" class="gallery-item">
          <div class ="item-img">
            <img class="img-in" :src="returnImagePath(item.image)"/>
          </div>
          <div class="lower-gallery-item">
            <div class="item-title"> {{item.title}} </div>
            <div class="item-text"> {{item.text}} </div>
            <button class="item-button"> {{item.buttonText}} </button>
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
          title: "Aplicativos para te ajudar",
          text: "Mês passado meu celular parou de pegar, então eu comprei um novo e com isso vem diversas responsabilidades, como descartar todo o lixo gerado de forma consciente.",
          buttonText: "Entenda melhor!"
        },
        {
          image:"feature2",
          title: "Entendendo o lixo",
          text: "Quando se fala de sustentabilidade logo pensamos em reciclagem e replantar árvores, mas o assunto abrange muitos tópicos e um dos mais importantes é o lixo.",
          buttonText: "Entenda melhor!"
        },
        {
          image:"feature3",
          title: "A Descentralização da Energia Solar",
          text: "Muito se fala sobre energias renováveis e sua importância não só para o meio-ambiente.",
          buttonText: "Entenda melhor!"
        }
      ]
    }
  },
  methods: {
    returnImagePath(image) {
      return require('./../../assets/' + image +'.jpg')
    }
  }

}
</script>

<style>
#homeGallery-outter {
  width: 100%;
  font-family: "Quicksand Light";
  margin-bottom: 40px;
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
  height: 700px;
}
.img-in {
  width: 100%;
  height: 100%;
}
.lower-gallery-item {
  padding: 4px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item-title {
  font-weight: bold;
  margin-top: 10px;
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
  font-size: 19px;
  width: 180px;
  height: 40px;
  background-color: white;
  border: 2px solid #F3B69B;
}

@font-face {
  font-family: "Quicksand Light";
  src: url("./../../assets/fonts/Quicksand_Light.otf") format("otf");
}
</style>