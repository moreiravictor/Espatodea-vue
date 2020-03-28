import PostRepository from './PostsRepository'
import CommentsRepository from './CommentsRepository'
import LoginRepository from './LoginRepository'

const repositories = {
    posts: PostRepository,
    comments: CommentsRepository,
    login: LoginRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};