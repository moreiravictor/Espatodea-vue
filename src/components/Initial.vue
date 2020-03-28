<template>
  <div id="texat">
    <input v-model="message" placeholder="Me edite">
    <p>A mensagem é: {{ message }}</p>
    <br>
    <p> {{data_like.foo}} </p>
    <button v-on:click="data_like.foo = isClicked() ">Change this shit</button>

    <div>
      {{ info_api }}
      <button v-on:click="call()">Call API</button>
    </div>

  </div>
</template>

<script>
import { RepositoryFactory } from './../api-calls/RepositoryFactory'
const PostsRepository = RepositoryFactory.get('posts')

export default {
  data() {
    return {
      data_like: {
        foo: 'CU'
      },
      is_clicked: 0,
      message: 'asdsaasd',
      info_api: []
    }
  },

  methods: {

    async call() {
      const {data} = await PostsRepository.get()
      this.info_api = data.data
    },

    isClicked() {
      if (this.is_clicked%2 == 0) {
        this.is_clicked++
        return 'CU'
      } else {
        this.is_clicked++
        return 'BUCETA'
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
