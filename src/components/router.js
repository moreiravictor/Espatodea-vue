import VueRouter from 'vue-router';
import Home from './../views/Home.vue'
import PostForm from './forms/PostForm.vue'
import PostView from './../views/PostView.vue'
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/post/form',
        component: PostForm
    },
    {
        path: '/post/see',
        component: PostView
    }
];

export default new VueRouter({routes});