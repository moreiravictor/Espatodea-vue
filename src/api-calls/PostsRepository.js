import Repository from './Repository'

const resource = "/post";

export default {
    get() {
        return Repository.get(`${resource}/getAll`);
    },
    getByTitle(post_title) {
        return Repository.get(`${resource}/getByTitle`+post_title)
    },
    publishPosts(post) {
        return Repository.post(`${resource}/publish`, post)
    }
};