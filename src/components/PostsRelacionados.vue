<template>
    <div id="relacionados-outter">
        <div class="relacionados-upper-line"> </div>
        <div class="relacionados-upper">Posts relacionados</div>
        <div class="relacionados-inner">
            <div v-for="post in posts_exibidos" v-bind:key="post.post_id" class="relacionados-item">
                <router-link :to="{name: 'post', params: {post_id: post.post_id}}">
                    <img class="relacionados-item-img" :src="post.post_image_path"/>
                </router-link>
            </div>
        </div>
        <div class="relacionados-under-line"> </div>
    </div>
</template>

<script>
import { RepositoryFactory } from './../api-calls/RepositoryFactory'
import { getMostRelatedCategory } from './commons/categories'
const postCaller = RepositoryFactory.get('posts');

export default {
    props: ['post_categories'],
    data() {
        return {
            posts_relacionados: [],
            posts_exibidos: [],
            window_width: window.innerWidth,
            qtd_posts: 5
        }
    },
    methods: {
        getPostsRelacionados(category_id) {
            postCaller.getByCategory(category_id, this.qtd_posts).then(res => {
                this.posts_relacionados = res.data.data;
                this.posts_exibidos = this.posts_relacionados;
                this.onResize();
            });
        },
        onResize() {
            this.window_width = window.innerWidth;
            if(this.window_width >= 1250) {
                this.posts_exibidos = this.posts_relacionados;
            } else {
                this.posts_exibidos = this.posts_relacionados.slice(0, 3);
            }
        }
    },
    mounted() {
        if (typeof this.post_categories !== 'undefined') {
            let most_related_category = getMostRelatedCategory(this.post_categories);
            this.getPostsRelacionados(most_related_category);
        }
        window.addEventListener('resize', this.onResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    },
    watch: {
        post_categories: {
            handler: function() { 
                if (typeof this.post_categories !== 'undefined') {
                    let most_related_category = getMostRelatedCategory(this.post_categories);
                    this.getPostsRelacionados(most_related_category);
                }
            },
            deep: true
        }
    }

}
</script>

<style>
#relacionados-outter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 2vw;
    color: black;
}
.relacionados-upper {
    font-size: 30px;
    margin-bottom: 2vw;
    text-align: center;
}
.relacionados-inner {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    width: 50%;
}
.relacionados-item {
    display: flex;
    flex-direction: column;
    border-radius: 50px;
    margin-right: 2%;
    align-items: center;
    flex: 1;
}
.relacionados-item-img {
    width:100%;
    height:100%;
    border-radius: 2000px;
}
.relacionados-item:hover .relacionados-item-img  {
    opacity: 0.3;
    cursor: pointer;
}
.relacionados-under-line {
    background-color: black;
    margin-top: 4vw;
    width: 20%;
    height: 1px;
}
.relacionados-upper-line {
    background-color: black;
    margin-bottom: 3vw;
    width: 20%;
    height: 1px;
}
@media(max-width: 600px) {
    .relacionados-inner {
        width: 90%;
    }
}
</style>