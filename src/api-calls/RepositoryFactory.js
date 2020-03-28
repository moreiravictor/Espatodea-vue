import PostRepository from './PostsRepository'
const repositories = {
    posts: PostRepository,
};

export const RepositoryFactory = {
    get: name => repositories[name]
};