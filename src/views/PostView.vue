<template>
    <div class="outter-post-view">
        <button @click="getPostById(24)">Get the post</button>
        <div v-html="(post.data != undefined) ? post.data.data.post_content : ''"></div>
    </div>
</template>

<script>
import { RepositoryFactory } from './../api-calls/RepositoryFactory';
// import Post from './../models/Post';
const postCaller = RepositoryFactory.get('posts');

export default {
    data () {
        return {
            post: []
        }
    },
    methods: {
        async getPostById(id) {
            this.post = await postCaller.getById(id);
            this.post.data.data.post_content = this.post.data.data.post_content.replace(/\n/g, "<br />");
        }
    }
}
</script>

<style>

</style>