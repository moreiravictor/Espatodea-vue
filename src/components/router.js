import VueRouter from 'vue-router';
import Initial from './Initial.vue'
import PostForm from './forms/PostForm.vue'
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        component: Initial
    },
    {
        path: '/post/form',
        component: PostForm
    }
];

export default new VueRouter({routes});