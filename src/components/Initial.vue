<template>
  <div id="texat">
    <input v-model="message" placeholder="Me edite">
    <p>A mensagem é: {{ message }}</p>
    <br>
    <p> {{data_like.foo}} </p>
    <button v-on:click="data_like.foo = isClicked() ">Change this shit</button>

    <div>
      <button v-on:click="getPosts()">Call API</button>
      <br>
      {{ info_api }}
    </div>
    <br>
    <input v-model="post_model.title" placeholder="Put the post title">
    <button v-on:click="publishPosts(post_model)">Publich Post</button>
    {{ info_post }}
  </div>
</template>

<script>
import { RepositoryFactory } from './../api-calls/RepositoryFactory'
const postCaller = RepositoryFactory.get('posts')

export default {
  data() {
    return {
      data_like: {
        foo: 'aff'
      },
      is_clicked: 0,
      message: 'asdsaasd',
      post_model: {
        title: ''
      },
      info_api: [],
      info_post: []
    }
  },
    
  methods: {
    async publishPosts(model) {
      const {data} = await postCaller.publishPosts(model);
      this.info_post = data;
    },

    async getPosts() {
      const {data} = await postCaller.getAll()
      this.info_api = data.data
    },

    isClicked() {
      if (this.is_clicked%2 == 0) {
        this.is_clicked++
        return 'aff'
      } else {
        this.is_clicked++
        return 'oof'
      } 
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#text {
  text-align: center;
}
</style>
