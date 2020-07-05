<template>
  <div class="banner-outter">
            <div class="banner-img-out"><img src="./../../assets/arvore.png" class="banner-img"/></div>
            <div class="line-between"></div>
            <div class="banner-espatodea-text">Espatodea</div>
            <div class="banner-text">
                <p class="banner-text-bigger">
                    Acreditamos que se cada um fizer um pouquinho, conseguimos construir um mundo melhor. 
                    Por isso criamos a Espatódea, e aqui você vai aprender de forma simples o que está acontecendo com o nosso planeta, 
                    como podemos mudar isso e a importância de cada um nesse processo.
                </p>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>
.banner-outter {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(243, 182, 155, .4);
    margin-bottom: 2%;
}
.banner-img-out {
    display: flex;
    justify-content: center;
    padding: 2%;
    width: 25%;
}
.line-between {
    width: 2px;
    height: 10vw;
    background-color: #406652;
    display: block;
}
.banner-img {
    width: 100%;
}
.banner-espatodea-text {
    display: none;
}
.banner-text {
    color: #406652;
    font-family: "Quicksand Light";
    font-size: 2vw;
    padding: 2% 3% 3% 3%;
    padding-right: 10%;
}
.banner-text-bigger {
    color: #406652;
}

@font-face {
  font-family: "Quicksand Light";
  src: url("./../../assets/fonts/Quicksand_Light.otf");
}
@media(max-width: 868px) {
    .banner-outter {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .banner-img-out {
        border: none;
    }
    .banner-img {
    width: 40%;
    padding-top: 3%;
    padding-bottom: 3%;
    }   
    .banner-espatodea-text {
        display: flex;
        color: white;
        font-size: 25px;
        margin-bottom: 10px;
    }
    .banner-text {
        display: none;
    }
    .line-between {
        display: none;
    }
}

</style>