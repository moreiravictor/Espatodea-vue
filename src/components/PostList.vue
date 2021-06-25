<template>
    <div id="post-list-outter">
        <div class="post-list-title">Posts</div>
        <div class="post-list-inner">
            <div v-for="(post, index) in post_list" v-bind:key="index" class="post-list-item">
                <div class="post-list-item-image">
                <img class="post-item-image-inner" :src="post.post_image_path"/>
                </div>
                <div class="post-list-item-title">
                <p class="p-new">{{post.title}}</p>
                <p class="p-new">{{post.post_author}}</p>
                <p class="p-new">{{prepareDate(post.postDate)}}</p>
                </div>
                <div class="edit-post">
                    <button @click="sendPostEdit(post)" class="button">editar</button>
                    <button @click="removePost(post)" class="button">excluir</button>
                </div>
            </div>
        </div>
        <button class="button" @click="openForm()">novo post</button>
        <PostForm :postModel="post_to_edit" v-if="showPostForm"/>
    </div>
</template>

<script>
import {RepositoryFactory} from './../api-calls/RepositoryFactory'
import PostForm from './forms/PostForm'
import { prepareDate } from '../utils' 
const postCaller = RepositoryFactory.get('posts');

export default {
    components: {
        PostForm
    },
    data() {
        return{
            post_list: {},
            showPostForm: false,
            post_to_edit: {}
        }
    },
    methods: {
        getAllPosts() {
            postCaller.getAll().then(res => {
                this.post_list = res.data.data;
            })
        },
        removePost(post) {
            this.$fire({
                title: 'Tem certeza que deseja excluir o post?',
                confirmButtonText: 'sim',
                cancelButtonText: 'não',
                showCancelButton: true
                }).then( result => {
                if (result.value) {
                    postCaller.deletePost(post.post_id).then(() =>{
                        this.$alert('Post excluído!','', 'success');
                        this.getAllPosts();
                    });
                } else {
                    this.$alert('Post não foi excluído!','', 'info');
                }
            });
        },
        prepareDate,
        sendPostEdit(post) {
            this.post_to_edit = post;
            this.showPostForm = true;
            window.scroll({top: 4000, left: 0, behavior: 'smooth'});
        },
        openForm() {
            this.post_to_edit = {};
            this.showPostForm = (this.showPostForm) ? false : true;
        }
    },
    mounted() {
        this.getAllPosts();
    }
}
</script>

<style>
#post-list-outter {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.post-list-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #F3B69B;
    width: 50%;
}
.post-list-title {
    font-size: 38px;
    padding-bottom: 20px;
    font-family: "Quicksand Light";
}
.post-list-item {
    border: 1px solid #F3B69B;
    width: 100%;
    height: 100px;
    text-align: center;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    padding-top: 15px;
}
.post-list-item-image {
    width: 150px;
    height: 100%;
    padding-left: 1%;
}
.post-item-image-inner {
    width: 100%;
    height: 100%;
}
.post-list-item-title {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-family: "Quicksand Light";
    padding-left: 2%;
    width: 100%;
}
.p-new {
    margin: 0;
}
.edit-post {
    padding: 10px;
    width: 30%;
}

</style>