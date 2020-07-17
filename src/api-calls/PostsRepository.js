import Repository from './Repository'

const resource = "/post";

export default {
    getAll() {
        return Repository.get(`${resource}`);
    },
    getByTitle(post_title) {
        return Repository.get(`${resource}/title?title=${post_title}`)
    },
    publishPosts(post) {
        return Repository.post(`${resource}`, post)
    },
    patchPost(post, id) {
        return Repository.patch(`${resource}/${id}`, post)
    },
    deletePost(id) {
        return Repository.delete(`${resource}/${id}`)
    },
    getById(id) {
        return Repository.get(`${resource}/${id}`)
    },
    getByCategory(category_id, page_size, page) {
        return Repository.get(`${resource}/category/${category_id}?page=${page}&size=${page_size}`)
    }
};