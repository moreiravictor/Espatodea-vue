import VueRouter from 'vue-router';
import Home from './../views/Home.vue'
import PostView from './../views/PostView.vue'
import PostGallery from './PostGallery.vue'
import Login from './Login.vue'
import PostManager from './../views/PostManager'
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/post/gerenciar',
        component: PostManager
    },
    {
        path: '/post/see/:post_id',
        name: 'post',
        component: PostView
    },
    {
        path: '/post/gallery/:post_category',
        name: 'gallery',
        component: PostGallery
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];

export default new VueRouter({routes});