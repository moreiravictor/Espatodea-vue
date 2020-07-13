<template>
  <div v-if="user !== 0" class="outter-post">
      <div class="outter-selection">
        <div class="button-selection">Categorias</div>
        <div class="inner-selection">
            <div class="selection" v-for="(category, i) in categories" :key="category">
                <input type="checkbox" :id="i" :value="i" v-model="checked_categories">
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
            <button type="button" class="button" @click="sendPost(postModel)">{{(typeof postModel.post_id === 'undefined')? 'Postar' : 'Editar'}}</button>
            <button type="button" class="button" @click="postModel = {};checked_categories = []">Resetar</button>
          </div>
      </form>
      <div class="imgur-authorizatiom">
          <div class="combo-field">
                <label class="label-post">Imagem do post</label>
                <input style="margin-top:10px" type="file" @change="onImageSelected" placeholder="imagem do post" required> 
            </div>
            <div>
                <label class="label-post">Data do post</label>
                <input v-model="post_date" type="date" required> 
            </div>
      </div>
  </div>
</template>

<script>
import { RepositoryFactory } from './../../api-calls/RepositoryFactory';
import axios from 'axios'
import { categories } from './../commons/categories'
import { americanDate } from './../commons/functions'
const postCaller = RepositoryFactory.get('posts');
export default {
    props: ['postModel'],
    data() {
        return {
            categories: categories,
            checked_categories: [],
            showCat: "none",
            selectedImage: null,
            acces_token: '',
            post_date: '',
            get user() {return localStorage.getItem('user') || 0}
        }
    },
    methods: {
        async sendPost(model) {
            this.checkSelectedCategories();
            if (typeof model.post_id === 'undefined') {
                postCaller.publishPosts(model).then(res => {
                    this.$alert(res.data.data.title, 'Postado!', 'success').then(() => location.reload());
                });
            } else {
                postCaller.patchPost(model, model.post_id).then(res => {
                    this.$alert(res.data.data.title, 'Atualizado!', 'success').then(() => location.reload());
                });
            }
        },
        checkSelectedCategories() {
            this.postModel.post_categories = [];
            this.checked_categories.forEach(cat_id => {
                const new_category = {category_id: cat_id};
                this.postModel.post_categories.push(new_category);
            });
        },
        onImageSelected(event) {
            this.selectedImage = event.target.files[0];
            this.sendImageToImgur();
        },
        sendImageToImgur() {
            if (this.selectedImage != null && this.$route.params.acces_token) {
                axios.post('https://api.imgur.com/3/image', this.selectedImage, {headers: {Authorization: `Bearer ${this.$route.params.acces_token}`}})
                    .then(res => {
                        this.postModel.post_image_path = res.data.data.link;
                        this.$alert('Imagem enviada!', 'Sucesso', 'success');
                    }).catch(err => this.$alert(`Erro ao fazer upload para o Imgur:\n${err}`, 'Erro', 'error'));
            } else if(this.selectedImage == null) {
                this.$alert('Você precisa selecionar uma imagem', 'Erro', 'error');
            } else {
                this.$alert('Você precisa logar no Imgur Novamente', 'Erro', 'error');
            }
        },
        selectCategories() {
            if (this.postModel && this.postModel.post_categories) {
                this.checked_categories = [];
                this.postModel.post_categories.forEach(category => {
                    this.checked_categories.push(category.category_id);
                });
            }
        }
    },
    mounted() {
        this.selectCategories();
        this.post_date = americanDate(this.postModel.post_date);
    },
    watch: {
        postModel: function() {
            this.selectCategories();
            this.post_date = americanDate(this.postModel.post_date);
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
.edit-text-area {
    display: flex;
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