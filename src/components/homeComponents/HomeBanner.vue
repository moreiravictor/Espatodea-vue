<template>
  <div class="banner-outter">
            <div class="banner-img-out"><img src="./../../assets/arvore.png" class="banner-img"/></div>
            <div class="banner-espatodea-text">Espatodea</div>
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
    border-right: 1px solid white;
    padding-left: 3%;
}
.banner-img {
    width: 100%;
}
.banner-espatodea-text {
    display: none;
}
.banner-text {
    color: white;
    font-family: "Quicksand Light";
    font-size: 22px;
    padding: 2% 3% 3% 3%;
    padding-right: 10%;
}
.banner-text-bigger {
    color: rgba(0, 0, 0, 0.993);
}

@font-face {
  font-family: "Quicksand Light";
  src: url("./../../assets/fonts/Quicksand_Light.otf") format("otf");
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
}

</style>