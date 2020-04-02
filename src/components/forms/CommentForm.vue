<template>
    <div class="new-comment-outter">
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
</template>

<script>
import { RepositoryFactory } from './../../api-calls/RepositoryFactory';
const commentCaller = RepositoryFactory.get('comments');

export default {
    data() {
        return {
            new_comment: {}
        }
    },
    props: ['post'],
    methods: {
        publishComment(model) {
            model.post_id = this.post.data.data.post_id;
            commentCaller.publishComment(model).then(this.$router.go());
        }
    }
}
</script>

<style>
.new-comment-outter {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.new-comment {
    width: 60%;
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
    width: 100%;
    display: flex;
    flex-direction: column;
}
.comment-label {
    margin-bottom: 2%;
}
.comment-area {
    width: 100%;
    height: 300px;
}
.button-comment {
    margin-top: 4%;
    width: 20%;
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

</style>