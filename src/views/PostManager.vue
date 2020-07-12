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
            get user() {return localStorage.getItem('user') || 0},
            client_id: 'd0fe7c77d096e32'
        }
    },
    methods: {
        authLink() {
            return `https://api.imgur.com/oauth2/authorize?client_id=${this.client_id}&response_type=token`;
        }
    },
    components: {
        PostList
    },
    created: function() {
        if(!this.$route.params.acces_token && this.user !== 0) {
            window.location.replace(this.authLink());
        }
    }
}
</script>

<style>

</style>