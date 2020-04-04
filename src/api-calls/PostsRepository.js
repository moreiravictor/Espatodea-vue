import Repository from './Repository'

const resource = "/post";

export default {
    getAll() {
        return Repository.get(`${resource}/getAll`);
    },
    getByTitle(post_title) {
        return Repository.get(`${resource}/getByTitle`+post_title)
    },
    publishPosts(post) {
        return Repository.post(`${resource}/publish`, post)
    },
    patchPost(post, id) {
        return Repository.patch(`${resource}/patch/${id}`, post)
    },
    deletePost(id) {
        return Repository.delete(`${resource}/delete/${id}`)
    },
    getById(id) {
        return Repository.get(`${resource}/getById/${id}`)
    },
    getByCategory(category_id) {
        return Repository.get(`${resource}/getByCategory/${category_id}`)
    }
};