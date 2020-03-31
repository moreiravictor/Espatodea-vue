<template>
  <div class="footer-outter">
      <div class="footer-inner">
        <div class="espatodea">
            Espatodea
        <div class="turtle">
            <img class="img-turtle" src="./../assets/turtle.png"/>
        </div>
        </div>
        <div class="news">
            <div class="news-text">Inscreva-se para receber os novos posts:</div>
            <div class="news-field">
                <label>Nome:</label>
                <input class="input-footer" type="text"/>
            </div>
            <div class="news-field">
                <label>E-mail:</label>
                <input class="input-footer" type="text"/>
            </div>
            <button class="news-button">
                <font-awesome-icon class="button-icon" :icon="['fas', 'pencil-alt']" />
                inscreva-se
            </button>
        </div>
        <div class="credits">
            <font-awesome-icon class="credits-icon" :icon="['fas', 'flask']" />
            <div class="credits-text">
                <div>Developed by Victor Moreira</div>
                <div>Designed by Beatriz Vitor</div>
            </div>
        </div> 
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer-outter {
    display: flex;
    align-items: center;
    margin-top: 40px;
    width: 100%;
    height: 150px;
    background-color: #F3B69B;
    color: white;
    font-family: Quicksand Light;
}
.footer-inner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding-left:2%;
    padding-right: 4%;
}
.espatodea {
    font-size: 34px;
    padding-top: 2.2%;
}
.turtle {
    height: 30px;
    width: 55px
}
.img-turtle {
    height: 100%;
    width:100%
}
.news {
    display: flex;
    align-items: center;
}
.news-text {
    padding-right: 1%;
    font-size: 22px;
    width:28%;
}
.news-field {
    padding-right: 8%;
    height: 45%;
    display: flex;
    flex-direction: column;
}
.input-footer {
    margin-top:5px;
    width: 140%;
    height: 40%;
    border: 1px solid rgba(255, 190, 163, 0.4);
}
.news-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    margin-top: 1%;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    background-color: rgba(1, 1, 1, 0);
}
.news-button:hover {
    border: 1px solid #B58773;
    color: #B58773;
    cursor: pointer;
}
.button-icon {
    font-size: 12px;
    padding-right: 4px;
}
.credits {
    display: flex;
    align-items: center;
}
.credits-icon {
    padding-right: 8px;
    font-size: 20px;
}
.credits-text {
    display: flex;
    flex-direction: column;
    align-items: center;
}


@font-face {
  font-family: "Quicksand Light";
  src: url("./../assets/fonts/Quicksand_Light.otf") format("otf");
}
</style>