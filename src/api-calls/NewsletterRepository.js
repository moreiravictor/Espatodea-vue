import Repository from './Repository'

const resource = "/news";

export default {
    subscribeToNewsletter(name, email) {
        Repository.post(`${resource}/add?email=${email}&name=${name}`)
    },
    sendEmail(emails, bodyText, subject) {
        Repository.post(`${resource}?emails=${emails}&subject=${subject}`, bodyText);
    },
    authRequest() {
        Repository.post(`${resource}/auth`);
    }
}