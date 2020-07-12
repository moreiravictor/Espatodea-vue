import Repository from './Repository'

const resource = "/comment";

export default {
    getCommentsByPost(post_id) {
        return Repository.get(`${resource}/post/${post_id}`);
    },
    publishComment(comment) {
        return Repository.post(`${resource}`, comment);
    },
    deleteComment(comment_id) {
        return Repository.delete(`${resource}/${comment_id}`);
    }
};