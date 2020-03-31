import Repository from './Repository'

const resource = "/admin";

export default {
    connectAsAdmin(user) {
        return Repository.get(`${resource}/get`, user);
    }
};