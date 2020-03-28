import Repository from './Repository'

const resource = "/post";

export default {
    get() {
        return Repository.get(`${resource}/getAll`);
    }
};