import Repository from './Repository'

const resource = "/admin";

export default {
    connectAsAdmin(username, password) {
        return Repository.get(`${resource}/get?username=${username}&password=${password}`);
    }
};