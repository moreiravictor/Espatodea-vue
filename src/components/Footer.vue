<template>
  <div class="footer-outter">
      <div class="footer-inner">
        <div class="espatodea">
            <div class="icon-div"><font-awesome-icon class="credits-icon" :icon="['fas', 'flask']" /></div>
            <div class="credits-text">
                <div>Developed by Victor Moreira</div>
                <div>Designed by Beatriz Vitor</div>
            </div>
        </div>
        <div class="news">
            <div class="news-text">Quer receber nossa newsletter?</div>
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
            <router-link v-if="user !==0" class="link-login" to="/post/gerenciar"> <div class="admin-button">admin</div> </router-link>
        </div>
        <div class="credits">
            <router-link class="link-login" to="/login"> <img class="logo-footer" src="./../assets/logo-footer2.png"> </router-link>
        </div> 
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            get user() {return localStorage.getItem('user') || 0}
        }
    }
}
</script>

<style>
.footer-outter {
    display: flex;
    align-items: center;
    margin-top: 2%;
    width: 100%;
    color: white;
    font-family: Quicksand Light;
    background-image: url('./../assets/footer.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.footer-inner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left:2%;
    padding-right: 4%;
    padding-top: 10%;
}
.espatodea {
    margin-top: 4%;
    display: flex;
    align-items: center;
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
.login-button {
    margin-top: 10px;
    cursor: pointer;
}
.admin-button {
    margin-top: 10px;
    cursor: pointer;
}
.div-footer-left {
    display: flex;
}
.news {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 4%;
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
    font-size: 1.4vw;
}
.credits-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size:1.1vw;
}
.logo-footer {
    width: 50%;
    margin-left: 15%;
    padding-bottom: 25%;
}


@font-face {
  font-family: "Quicksand Light";
  src: url("./../assets/fonts/Quicksand_Light.otf");
}

@media(max-width: 1820px) {
    .logo-footer {
        margin-left: 30%;
    }
    .news, .espatodea {
        margin-top: 9%;
    }
}

@media(max-width: 1750px) {
    .news, .espatodea {
        margin-top: 9%;
    }
    .news-button {
        margin-top: 6%;
    }
}

@media(max-width: 1440px) {
    .logo-footer {
        margin-left: 35%;
        padding-bottom: 10%;
    }
    .news, .espatodea {
        margin-top: 8%;
    }
    .news {
        margin-left: 10%;
    }
}

@media(max-width: 1196px) {
    .espatodea {
        flex-direction: column;
        margin-left: 2%;
        text-align: center;
        justify-content: center;
        align-items: center;
        width: 20%;
    }
    .news-button {
        font-size: 1vh;
        margin-top: 7%;
    }
}

@media(max-width: 1007px) {
    .espatodea {
        width: 22%;
    }
    .news-text {
        margin-bottom: 8px;
        font-size: 18px;
    }
    .news-button {
        width: 12%;
        height: 40%;
        margin-top: 8%;
    }
    .news-button-text {
        display: none;
    }
}

@media(max-width: 960px) {
    .news {
        padding: 2%;
    }
    .news-text {
        margin-bottom: 5px;
        font-size: 16px;
    }
    .news-button {
        margin-top: 9%;
    }
    .button-icon {
        padding: 0px;
    }
    .input-footer {
        width: 100%;
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

    .espatodea {
        margin-top: 10%;
        width: 30%;
    }
    .credits-text {
        font-size: 12px;
    }
}

@media(max-width: 861px) {
    .espatodea {
        width: 30%;
    }
    .credits-text {
        font-size: 10px;
    }
    .news {
        margin-left: 5%;
    }
    .news-text, .news-field {
        font-size: 14px;
    }
    .input-footer {
        width: 100%;
    }

}

@media(max-width: 759px) {
    .espatodea {
        font-size: 18px;
    }
}
@media(max-width: 665px) {
        .espatodea {
            display: none;
    }
    .news {
        padding-top: 11%;
    }
}

@media(max-width: 516px) {
    .news {
        width: 100%;
        margin-left: 2%;
    }
    .news-button {
        margin-top: 11%;
    }
}
@media(max-width: 463px) {
    .news {
        width: 140%;
    }
}
@media(max-width: 417px) {
    .news {
        width: 200%;
    }
    .news-text {
        font-size: 10px;
    }
    .news-field {
        font-size: 10px;
    }
    .news-button {
        margin-top: 6%;
    }
    .input-footer {
        height: 9px;
    }
    .button-icon {
        font-size: 10px;
    }
}

@media(max-width: 408px) {
    .news-button {
        margin-top: 8%;
    }
}

@media(max-width: 328px) {
    .news-text {
        font-size: 8px;
        margin-bottom: 1px;
    }
    .news-field {
        font-size: 8px;
    }
}
@media(max-width: 282px) {
    .news-text, .news-field {
        font-size: 7px;
    }
    .input-footer {
        height: 4px;
    }
}
</style>