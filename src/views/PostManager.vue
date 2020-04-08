<template>
    <div v-if="user !==0" id="post-manager-outter">
        <PostList/>
    </div>
</template>

<script>
import PostList  from './../components/PostList'
export default {
    data() {
        return {
            get user() {return localStorage.getItem('user') || 0}
        }
    },
    components: {
        PostList
    }
}
</script>

<style>

</style>