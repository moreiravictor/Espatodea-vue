<template>
  <div class="outter-post">
      <div class="inner-selection">
        <div class="button-selection" v-on:click="showCategories()">Categories</div>
        <div class="inner-selection" :style="{display: showCat}">
            <div class="selection" v-for="(category, i) in categories" v-bind:key="category">
                <input type="checkbox" :id="i" value="value" v-model="checked_categories[i]">
                <label> {{category}} </label>
            </div>
        </div>
      </div>
      <form id="post-form">
          <div class="outter-field">
              <div class="upper-fields">
                    <div class="combo-field">
                        <label class="label">Post title</label> 
                        <input v-model="post_model.title" placeholder="Type the post title">
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
            <button class="button" v-on:click="sendPost(post_model)">Postar</button>
          </div>
      </form>
  </div>
</template>

<script>
import { RepositoryFactory } from './../../api-calls/RepositoryFactory';
const postCaller = RepositoryFactory.get('posts');
let postFactory = (
    {
        title: "",
        post_content: "",
        post_author: "",
        post_categories: [],
        post_date: new Date()
    }
)
export default {
    data() {
        return {
            post_model: postFactory,
            categories: {
                0:  "Environment",
                1:	"Environment Tips",
                2:	"Projects",
                3:	"Our Projects",
                4:	"Other Projects",
                5:	"Entertainment",
                6:	"Food",
                7:	"Food Tips",
                8:	"Food Recipes"
            },
            checked_categories: [],
            showCat: "none"
        }
    },

    methods: {
        async sendPost(model) {
            this.checkSelectedCategories();
            let response = await postCaller.publishPosts(model);
            console.log(response);
        },
        checkSelectedCategories() {
            this.checked_categories.forEach((cat, index) => {
                if (cat == true) {
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
.outter-post {
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 4px;
    width: 80%;
    display: flex;
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

</style>