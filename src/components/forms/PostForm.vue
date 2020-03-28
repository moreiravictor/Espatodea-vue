<template>
  <div>
      <form id="post-form">
          <div class="outter-field">
              <div class="upper-fields">
                    <div class="combo-field">
                        <label class="label">Post title</label> 
                        <input v-model="post_model.post_title" placeholder="Type the post title">
                    </div>
                    <div class="combo-field">
                        <label class="label">Post author</label>
                        <input v-model="post_model.post_author" placeholder="Type the post title"> 
                    </div>
              </div>
              <div class="central-fields">
                  <div class="combo-field">
                    <label class="label">Post Content</label>
                    <textarea class="content" v-model="post_model.post_content" placeholder="Type the post content"></textarea>
                  </div>
              </div>
          </div>
      </form>
      <button class="button" v-on:click="sendPost(post_model)">Postar</button>
  </div>
</template>

<script>
import { RepositoryFactory } from './../../api-calls/RepositoryFactory';
const postCaller = RepositoryFactory.get('posts');

export default {
    data() {
        return {
            post_model: {
                post_title: "",
                post_content: "",
                post_author: ""
            }
        }
    },

    methods: {
        async sendPost(model) {
            let response = await postCaller.publishPosts(model);
            console.log(response);
        }
    }


}
</script>

<style>
.content {
    width: 50%;
    height: 600px;
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
.label {
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
</style>