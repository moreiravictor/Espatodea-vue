<template>
    <div id="post-manager-outter">
        <button @click="publishPost()">novo post</button>
        <PostForm v-if="showPostForm"/>

    </div>
</template>

<script>
import PostForm from './../components/forms/PostForm'
export default {
    components: {
        PostForm
    },
    data() {
        return {
            showPostForm: false,
        }
    },
    methods: {
        publishPost() {
            this.showPostForm = (this.showPostForm) ? false : true;
        }
    }

}
</script>

<style>

</style>