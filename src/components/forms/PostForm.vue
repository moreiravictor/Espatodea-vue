<template>
  <div v-if="user !== 0" class="outter-post">
      <div class="outter-selection">
        <div class="button-selection" @click="showCategories()">Categorias</div>
        <div class="inner-selection" :style="{display: showCat}">
            <div class="selection" v-for="(category, i) in categories" :key="category">
                <input type="checkbox" :id="i" :value="category" v-model="checked_categories[i]">
                <label> {{category}} </label>
            </div>
        </div>
      </div>
      <form id="post-form">
          <div class="outter-field">
              <div class="upper-fields">
                    <div class="combo-field">
                        <label class="label-post">Título do post</label> 
                        <input v-model="postModel.title" placeholder="digite o título do post" required>
                    </div>
                    <div class="combo-field-second">
                        <label class="label-post">Autor do post</label>
                        <input v-model="postModel.post_author" placeholder="quem escreveu?" required> 
                    </div>
              </div>
              <div class="central-fields">
                  <div class="combo-field">
                    <label class="label-post">Conteúdo do post</label>
                    <textarea class="content" v-model="postModel.post_content" placeholder="digite o post" required></textarea>
                  </div>
              </div>
            <button class="button" @click="sendPost(postModel)">{{(typeof postModel.post_id === 'undefined')? 'Postar' : 'Editar'}}</button>
            <button class="button" @click="postModel = {}">Resetar</button>
          </div>
      </form>
      <div class="imgur-authorizatiom">
          <div class="combo-field">
                        <label class="label-post">Imagem do post</label>
                        <input style="margin-top:10px" type="file" @change="onImageSelected" placeholder="imagem do post" required> 
                        <button style="margin-top:10px" class="button-selection" @click="sendImageToImgur()">enviar imagem</button>
                    </div>
      </div>
  </div>
</template>

<script>
import { RepositoryFactory } from './../../api-calls/RepositoryFactory';
import axios from 'axios'
const postCaller = RepositoryFactory.get('posts');
export default {
    props: ['postModel'],
    data() {
        return {
            categories: {
                0:  "Meio Ambiente",
                1:	"Dicas de Meio Ambiente",
                2:	"Projetos",
                3:	"Nossos Projetos",
                4:	"Outros Projetos",
                5:	"Entretenimento",
                6:	"Comida",
                7:	"Dicas de Comida",
                8:	"Receitas",
                9: "Entenda mais",
                10: "Comece aqui"
            },
            checked_categories: [],
            showCat: "none",
            selectedImage: null,
            acces_token: '',
            get user() {return localStorage.getItem('user') || 0} 
        }
    },

    methods: {
        async sendPost(model) {
            this.checkSelectedCategories();
            if (typeof model.post_id === 'undefined') {
                let response = await postCaller.publishPosts(model);
                this.$alert(response.data.data.title, 'Postado!', 'success').then(() => location.reload());
            } else {
                let response = await postCaller.patchPost(model, model.post_id);
                this.$alert(response.data.data.title, 'Atualizado!', 'success').then(() => location.reload());
            }
            this.postModel = {};
        },
        checkSelectedCategories() {
            this.postModel.post_categories = [];
            this.postModel.comments = [];
            this.checked_categories.forEach((cat, index) => {
                if (cat === true) {
                    const new_category = {category_id: index};
                    this.postModel.post_categories.push(new_category);
                }
            });
        },
        showCategories() {
            if (this.showCat == "none") {
                this.showCat = "flex"; 
            }
            else  {
                this.showCat = "none";  
            }
        },
        onImageSelected(event) {
            this.selectedImage = event.target.files[0];
        },
        sendImageToImgur() {
            if (this.selectedImage != null && this.$route.params.acces_token) {
                axios.post('https://api.imgur.com/3/image', 
                    this.selectedImage, {
                    headers: {Authorization: `Bearer ${this.$route.params.acces_token}`}})
                    .then(res => {
                        this.postModel.post_image_path = res.data.data.link;
                        this.$alert('Imagem enviada!', 'Sucesso', 'success');
                        });
            } else {
                this.$alert('Você precisa selecionar uma imagem', 'Erro', 'error');
            }
        }
    }
}
</script>

<style>
.content {
    width: 80%;
    height: 40vh;
}
.upper-fields {
    display: flex;
}
.combo-field {
    display: flex;
    flex-direction: column;
}
.combo-field-second {
    display: flex;
    flex-direction: column;
    margin-left: 10%;
}
.label-post {
    top: 20%;
    padding-bottom: 5px;
}
.button {
    display:inline-block;
    cursor: pointer;
    padding:0.7em 1.7em;
    margin:0 0.3em 0.3em 0;
    border-radius:0.2em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:400;
    color:#FFFFFF;
    background-color:#3369ff;
    box-shadow:inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
    text-align:center;
    position:relative;
    margin-top: 10px;
}
.button:active{
    box-shadow:inset 0 0.6em 2em -0.3em rgba(0,0,0,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
}
.outter-post {
    margin: 0 auto;
    padding: 10px;
    border: 1px solid #F3B69B;
    border-radius: 4px;
    width: 60%;
    display: flex;
    font-family: "Quicksand Light";
}
.outter-field {
    padding-left: 2%;
}
.inner-selection {
    display: flex;
    flex-direction: column;
}
.outter-selection {
    display: flex;
    flex-direction: column;
    width: 20%;
}
.selection {
    margin-left: 10px;
}
textarea, input {
    border-radius: 4px;
}
#post-form {
    width: 50%;
}
.button-selection {
    display:inline-block;
    cursor: pointer;
    padding:0.7em 1.7em;
    margin:0 0.3em 0.3em 0;
    border-radius:0.2em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:400;
    color:#FFFFFF;
    background-color:#3369ff;
    box-shadow:inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
    text-align:center;
    position:relative;
    height: fit-content;
    width: fit-content;
    margin-top: 10px;
}
.imgur-authorizatiom {
    display: flex;
    flex-direction: column;
    width: 20%;
}

@font-face {
  font-family: "Quicksand Light";
  src: url("./../../assets/fonts/Quicksand_Light.otf");
}
</style>