<template>
  <div class="footer-outter">
      <div class="footer-inner">
        <div class="espatodea">
            Espatodea
        <div class="turtle">
            <img class="img-turtle" src="./../../assets/turtle.png"/>
        </div>
        </div>
        <div class="news">
            <div class="news-text">Inscreva-se para receber os novos posts:</div>
            <div class="news-field">
                <label>Nome:</label>
                <input type="text"/>
            </div>
            <div class="news-field">
                <label>E-mail:</label>
                <input type="text"/>
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
    width: 100%;
    height: 100px;
    background-color: #F3B69B;
    color: white;
    font-family: Quicksand Light;
}
.footer-inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-left:2%;
    padding-right: 4%;
}
.espatodea {
    font-size: 34px;
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
}
.news-text {
    padding-right: 2%;
    font-size: 22px;
    width:28%;
}
.news-field {
    padding-right: 10%;
    display: flex;
    flex-direction: column;
}
input {
    margin-top:5px;
    width: 140%;
    height: 40%;
    border: 1px solid #BC8C78;
}


@font-face {
  font-family: "Quicksand Light";
  src: url("./../../assets/fonts/Quicksand_Light.otf") format("otf");
}
</style>