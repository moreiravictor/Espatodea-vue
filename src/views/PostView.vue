<template>
    <div class="outter-post-view">
        <div class="upper-post">
            <div class="post-title">
                {{post_data.title}}
            </div>
            <div class="author-post">
            Escrito por {{post_data.post_author}}
            </div>
            <div class="post-date">
                {{prepareDate(post_data.postDate)}}
            </div>
            <div class="post-image">
                <img class="post-image-data" :src="post_data.post_image_path"/>
            </div>
        </div>
        <div class="middle-post">
            <div v-html="post_data.post_content"></div>
        </div>
        <PostsRelacionados :post_categories="post_data.post_categories"></PostsRelacionados>
        <div class="end-post">
          <Comments :comments="comments_paginated"/>
          <Pagination v-on:paginationToParent="commentsToShow" :data_array="post_data.comments" :qt_page="qt_page" />
          <CommentForm :post="post"/>
        </div>
    </div>
</template>

<script>
import { RepositoryFactory } from './../api-calls/RepositoryFactory';
import CommentForm from './../components/forms/CommentForm'
import Comments from '../components/Comments'
import Pagination from './../components/Pagination'
import PostsRelacionados from './../components/PostsRelacionados'
import { prepareDate } from '../utils' 
const postCaller = RepositoryFactory.get('posts');

export default {
    components: {
        Comments,
        CommentForm,
        Pagination,
        PostsRelacionados
    },
    data () {
        return {
            post: [],
            post_data: [],
            comments_paginated: {},
            qt_page: 4
        }
    },
    methods: {
        async getPostById(id) {
            postCaller.getById(id).then(response =>{
                this.post = response;
                this.post_data = response.data.data;
                this.post.data.data.post_content = this.post.data.data.post_content.replace(/\n/g, "<br/>");
                this.post.data.data.comments.forEach((comment, index) => 
                    this.post.data.data.comments[index].comment_content = comment.comment_content.replace(/\n/g, "<br/>"));
            });
        },
        prepareDate,
        commentsToShow(value) {
            this.comments_paginated = value;
        },
        scrollToTop() {
            window.scroll({top: 0, left: 0, behavior: 'smooth'});
        }
    },
    mounted() {
        this.getPostById(this.$route.params.post_id);
        this.scrollToTop();
    },
    watch: {
        $route: function() {
            this.getPostById(this.$route.params.post_id);
            this.scrollToTop();
        }
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
    margin-bottom: 40px;
}

.post-title {
    margin-top: 10px;
    font-size: 3vw;
    font-weight: bold;
    text-align: center;
}
.author-post {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 10px;
}
.post-date {
    text-align: center;
    margin-top: 5px;
    margin-bottom: 30px;
}
.post-image {
    width: 100%;
    display: flex;
    justify-content: center;
}
.post-image-data {
    max-width: 100%;
}
.middle-post {
    display: flex;
    flex-direction: column;
    width: 60%;
    align-items: center;
    justify-content: center;
    text-align: justify;
    font-size: 1.2vw;
    line-height: 1.6vw;
    margin-bottom: 1.4vw;
    font-family: Arial;
}
.end-post {
    width:50%; 
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 2vw;
}
.comments-padding {
  padding: 0.5vw;
}
.comments-post {
    margin-top: 2%;
    width:100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
}
.comments-title {
    margin-bottom: 2%;
    font-size: 4vw;
    text-align: center;
}
.comment-item {
    display: flex;
    width: 100%;
    flex-direction: column;
    border-bottom: 1px solid black;
    padding: 1% 0.5% 1% 0.5%;
    margin-bottom: 10px;
}
.author-label {
    font-weight: bold;
    color: #DBA490;
}
.comment-author {
    display: flex;
    margin-bottom: 1%;
}
.comment-content {
    margin-bottom: 1%;
    font-size: 16px;
} 
.new-comment-outter {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: fit-content;
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
@media(max-width: 1344px) {
    .middle-post {
        width: 80%;
    }
    .upper-post {
        width: 100%;
    }
    .post-image-data {
        max-width: 80%;
    }

}
@media(max-width: 700px) {
    .middle-post {
        font-size: 2vw;
        line-height: 2.5vw;
    }
    .end-post {
        width: 80%;
    }
    .new-comment-title {
        font-size: 5vw;
    }
}
@media(max-width: 400px) {
    .middle-post {
        font-size: 14px;
        line-height: 30px;
    }
    .end-post {
        width: 80%;
    }
    .new-comment-title {
        font-size: 5vw;
    }
}

</style>