import PostRepository from './PostsRepository'
import CommentsRepository from './CommentsRepository'
import LoginRepository from './LoginRepository'
import NewsletterRepository from './NewsletterRepository'

const repositories = {
    posts: PostRepository,
    comments: CommentsRepository,
    login: LoginRepository,
    news: NewsletterRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};