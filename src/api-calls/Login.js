import Repository from './Repository'

const resource = "/post";

export default {
    connectAsAdmin(user) {
        return Repository.get(`${resource}/admin`, user);
    }
};