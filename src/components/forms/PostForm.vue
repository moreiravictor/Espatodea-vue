<template>
  <div v-if="user !== 0" class="outter-post">
      <div class="inner-selection">
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
                        <input v-model="post_model.title" placeholder="digite o título do post" required>
                    </div>
                    <div class="combo-field">
                        <label class="label-post">Autor do post</label>
                        <input v-model="post_model.post_author" placeholder="quem escreveu?" required> 
                    </div>
                    <div class="combo-field">
                        <label class="label-post">Imagem do post</label>
                        <label>acces token</label>
                        <input style="margin-top:5px" type="text" v-model="acces_token">
                        <input style="margin-top:10px" type="file" @change="onImageSelected" placeholder="imagem do post" required> 
                        <button style="margin-top:10px" @click="sendImageToImgur()">enviar imagem</button>
                    </div>
              </div>
              <div class="central-fields">
                  <div class="combo-field">
                    <label class="label-post">Conteúdo do post</label>
                    <textarea class="content" v-model="post_model.post_content" placeholder="digite o post" required></textarea>
                  </div>
              </div>
            <button class="button" @click="sendPost(post_model)">Postar</button>
          </div>
      </form>
      <div class="imgur-authorizatiom">
          <label>client_id</label>
          <input type="text" v-model="client_id">
      <a style="text-decoration: none; border: 1px solid black; margin-top: 10px" :href="authLink()" target="_blank">Clique aqui para autorizar o Imgur</a>
      </div>
  </div>
</template>

<script>
import { RepositoryFactory } from './../../api-calls/RepositoryFactory';
import { Post } from './../../models/Post.js'
import axios from 'axios'
const postCaller = RepositoryFactory.get('posts');
export default {
    data() {
        return {
            post_model: new Post(),
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
            client_id: '',
            get user() {return localStorage.getItem('user') || 0} 
        }
    },

    methods: {
        async sendPost(model) {
            this.checkSelectedCategories();
            let response = await postCaller.publishPosts(model);
            alert("Postado!");
            console.log(response);
        },
        checkSelectedCategories() {
            this.checked_categories.forEach((cat, index) => {
                if (cat === true) {
                    const new_category = {category_id: index};
                    this.post_model.post_categories.push(new_category);
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
            if (this.selectedImage != null) {
                axios.post('https://api.imgur.com/3/image', 
                    this.selectedImage, {
                    headers: {Authorization: `Bearer ${this.acces_token}`}})
                    .then(res => {
                        this.post_model.post_image_path = res.data.data.link;
                        alert("Imagem ok");
                        });
            }
        },
        authLink() {
            return `https://api.imgur.com/oauth2/authorize?client_id=${this.client_id}&response_type=token`;
        }
    }

}
</script>

<style>
.content {
    width: 80%;
    height: 80vh;
}
.upper-fields {
    display: flex;
}
.combo-field {
    display: flex;
    flex-direction: column;
    padding-left: 80px;
}
.central-fields {
    padding-top:10px;
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
    margin-left: 80px;
}
.button:active{
    box-shadow:inset 0 0.6em 2em -0.3em rgba(0,0,0,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
}
.outter-post {
    margin: 0 auto;
    padding: 40px;
    border: 1px solid black;
    border-radius: 4px;
    width: 80%;
    display: flex;
    font-family: "Quicksand Light";
}
.outter-field {
    padding-left: 12%;
}
.inner-selection {
    display: flex;
    flex-direction: column;
}
.selection {
    margin-left: 10px;
}
textarea, input {
    border-radius: 4px;
}
#post-form {
    width: 80%;
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
    height: 35px;
    margin-left: 10px;
    margin-top: 10px;
}
.imgur-authorizatiom {
    display: flex;
    flex-direction: column;
}

@font-face {
  font-family: "Quicksand Light";
  src: url("./../../assets/fonts/Quicksand_Light.otf") format("otf");
}
</style>