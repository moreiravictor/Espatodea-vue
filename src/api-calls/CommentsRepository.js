import Repository from './Repository'

const resource = "/comment";

export default {
    getCommentsByPost(post_id) {
        return Repository.get(`${resource}/getCommentsByPost/${post_id}`);
    },
    publishComment(comment) {
        return Repository.post(`${resource}/publish`, comment);
    },
    deleteComment(comment_id) {
        return Repository.delete(`${resource}/delete/${comment_id}`);
    }
};