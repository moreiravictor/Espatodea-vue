class Post {
    constructor() {
        return {
            post_id: null,
            post_title: "",
            post_content: "",
            post_author: "",
            post_categories: [],
            post_date: null,
            comments: []
        }
    }
}
export {Post}