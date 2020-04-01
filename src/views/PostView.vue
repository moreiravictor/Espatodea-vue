<template>
    <div class="outter-post-view">
        <div class="upper-post">
            <div class="post-date">
                {{prepareDate(verify('post_date'))}}
            </div>
            <div class="post-title">
                {{verify('title')}}
            </div>
        </div>
        <div class="middle-post">
            <div v-html="verify('post_content')"></div>
        </div>
        <div class="end-post">
            <div class="author-post">
            Escrito por {{verify('post_author')}}
            </div>
            <div class="comments-post">
                <div class="comments-title">Comentários</div>
                <div v-for="(comment, index) in post.data.data.comments" :key="index" class="comment-item">
                    <div class="comment-author">
                        autor: {{comment.comment_author}}
                    </div>
                    <div class="comment-content">
                        comentário: {{comment.comment_content}}
                    </div>
                    <div class="comment-date">
                        data: {{prepareDate(comment.comment_date)}}
                    </div>
                </div>
            </div>
            <div class="new-comment">
                <div class="new-comment-title">
                    Digite um novo comentário!
                </div>
                <div class="new-comment-item">
                    <label class="comment-label">autor:</label>
                    <input v-model="new_comment.comment_author"/>
                </div>
                <div class="new-comment-item">
                    <label class="comment-label">comentário:</label>
                    <textarea v-model="new_comment.comment_content" class="comment-area"/>
                </div>
                <div class="new-comment-item">
                    <button @click="publishComment(new_comment)" class="button-comment">comentar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RepositoryFactory } from './../api-calls/RepositoryFactory';
// import VueRouter from 'vue-router';
const postCaller = RepositoryFactory.get('posts');
const commentCaller = RepositoryFactory.get('comments');


export default {
    data () {
        return {
            post: [],
            new_comment: {}
        }
    },
    methods: {
        async getPostById(id) {
            this.post = await postCaller.getById(id);
            this.post.data.data.post_content = this.post.data.data.post_content.replace(/\n/g, "<br />");
        },
        publishComment(model) {
            model.comment_date = new Date();
            model.post_id = 30;
            commentCaller.publishComment(model);
            this.$router.go(0)
        },
        verify(attribute) {
            return (this.post.data != undefined) ? this.post.data.data[attribute] : '';
        },
        prepareDate(date) {
            let date_converted = new Date(date);
            return `${date_converted.getDate()}/${date_converted.getMonth()+1}/${date_converted.getFullYear()}`;
        }
    },
    mounted() {
        this.getPostById(30);
    }
}
</script>

<style>
.outter-post-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Quicksand Light';
}
.upper-post {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
}
.post-date {
    margin-top: 20px;
}
.post-title {
    margin-top: 10px;
    margin-bottom: 30px;
    font-size: 34px;
    font-weight: bold;
}
.middle-post {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    justify-content: center;
    text-align: justify;
    font-size: 20px;
    line-height: 40px;
    margin-bottom: 20px;
}
.end-post {
   width:50%; 
   display: flex;
   flex-direction: column;
}
.author-post {
    display: flex;
    width: 100%;
    height: 100%;
    font-weight: bold;
}
.comments-post {
    margin-top: 2%;
    width:100%; 
    display: flex;
    flex-direction: column;
}
.comments-title {
    margin-bottom: 2%;
    font-size: 40px;
    text-align: center;
}
.comment-item {
    display: flex;
    width: 100%;
    flex-direction: column;
    border: 1px solid black;
    padding: 1% 0.5% 1% 0.5%;
    border-radius: 4px;
    margin-bottom: 10px;
}
.new-comment {
    width: 100%;
    display: flex;
    flex-direction: column;
}
.new-comment-title {
    font-weight: bold;
    margin-bottom: 1%;
    margin-top: 2%;
    font-size: 20px;
}
.new-comment-item {
    width: 25%;
    display: flex;
    flex-direction: column;
}
.comment-label {
    margin-bottom: 2%;
}
.comment-area {
    width: 200%;
    height: 300px;
}
.button-comment {
    margin-top: 4%;
    width: 40%;
    height: 30px;
    border: 0.1px solid #000;
    color: #000;
    cursor: pointer;
    background-color: rgba(0,0,0,0);
}
.button-comment:hover {
    color: #fff;
    border: 0.1px solid #fff;
    cursor: pointer;
    background-color: #F3B69B;
}

@font-face {
  font-family: "Quicksand Light";
  src: url("./../assets/fonts/Quicksand_Light.otf") format("otf");
}

</style>