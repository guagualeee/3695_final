import { Post } from './posts.js'
import { Comment } from './comments.js'
import { User } from './users.js'
export const resolvers = {
    Query: {
        posts() {
            return Post;
          },

        postsByTopic( parent, args, context, info ) {
            return Post.filter(Post => Post.topic === args.topic);
        },
        postsById( parent, args, context, info ) {
            return Post.filter(Post => Post.id === args.id);
        },
    },

    Mutation: {
        addPost: async ( _, {id, user, topic, content, comments} ) => {
            const post = {id:id, user:user, topic:topic, content:content, comments:comments}
            Post.push(post)
            return post
        },
        addComment: async ( _, {id, user, responses, postId} ) => {
            const comment = {id:id, user:user, responses:responses, postId:postId }
            Comment.push(comment)
            return comment
        },
        respondComment: async ( _, {id, user, responses, commentId} ) => {
            const respond = {id:id, user:user, responses:responses, commentId:commentId }
            Post.push(respond)
            return respond
        },
    }
}