<template>
    <PostForm/>
</template>

<script>
// import Initial from './components/Initial.vue'
import PostForm from './components/forms/PostForm.vue'

export default {
  name: 'App',
  components: {
    // Initial,
    PostForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
