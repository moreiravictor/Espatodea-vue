<template>
  <div class="footer-outter">
      <div class="footer-inner">
        <div class="espatodea">
            Espatodea
        <div class="turtle">
            <img class="img-turtle" src="./../assets/turtle.png"/>
        </div>
        <router-link class="link-login" to="/login"><div class="login-button">login</div></router-link>
        </div>
        <div class="news">
            <div class="news-text">Inscreva-se para receber os novos posts:</div>
            <div class="news-field-outter">
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
                    <div class="news-button-text">inscreva-se</div>
                </button>
            </div>
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
    margin-top: 2%;
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
.link-login {
    text-decoration: none;
    font-size: 18px;
    color: white;
}
.news {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.news-text {
    font-size: 22px;
    width:100%;
    margin-bottom: 20px;
}
.news-field {
    margin-right: 10%;
    height: 45%;
    display: flex;
    flex-direction: column;
}
.news-field-outter {
    width: 100%;
    display: flex;
}
.input-footer {
    margin-top:5px;
    width: 120%;
    height: 100%;
    border: 1px solid rgba(255, 190, 163, 0.4);
}
.news-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 49%;
    width: 27%;
    padding: 0;
    margin-top: 5%;
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
@media(max-width: 947px) {
    .news {
        padding: 2%;
    }
    .news-text {
        font-size: 16px;
    }
    .news-button {
        width: 12%;
        height: 40%;
        margin-top: 7%;
    }
    .button-icon {
        padding: 0px;
    }
    .news-button-text {
        display: none;
    }
    .credits {
        flex-direction: column;
        justify-content: center;
    }
    .credits-icon {
        margin-bottom: 10px;
    }
    .credits-text {
        font-size: 9px;
    }
}
@media(max-width: 759px) {
    .espatodea {
        font-size: 18px;
    }
}
@media(max-width: 665px) {
        .credits {
        display: none;
    }
}
@media(max-width: 463px) {
    .news {
        padding-top: 0;
        padding-bottom: 0;
            padding-left: 22px;
    }
    .news-text {
        margin-bottom: 0px;
        text-align: center;
    }
    .news-field-outter {
        flex-direction: column;
        align-items: center;
    }
    .news-field {
        font-size: 12px;
        margin-right: 0;
        text-align: center;
        align-items: center;
    }
    .input-footer {
        width: 80%;
        margin-top: 0;
    }
    .news-button {
        margin: 0;
        margin-top: 5px;
    }
}
</style>