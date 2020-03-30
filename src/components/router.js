import VueRouter from 'vue-router';
import Home from './../views/Home.vue'
import PostForm from './forms/PostForm.vue'
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/post/form',
        component: PostForm
    }
];

export default new VueRouter({routes});