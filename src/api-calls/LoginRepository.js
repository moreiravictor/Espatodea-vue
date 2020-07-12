import Repository from './Repository'

const resource = "/admin";

export default {
    connectAsAdmin(username, password) {
        return Repository.get(`${resource}?username=${username}&password=${password}`);
    }
};