import apolloServer from 'apollo-server'
const { gql } = apolloServer

export const typeDefs = gql`
  type Comment{
    id: String!
    user: String!
    responses: String!
    postId: String
    commentId: String
  }
  type Post{
    id: String!
    user: String!
    topic: String!
    content: String!
    comments: String
  }
  type User{
    id: String!
    name: String!
  }

  type Query {
    posts: [Post]
    postsByTopic(topic:String!): [Post]
    postsById(id:String!): [Post]
  }

  type Mutation {
    addPost(id: String!, user: String!, topic: String!, content: String!, comments: String): Post!
    addComment(id: String!, user: String!, responses: String!, postId: ID!): Comment!
    respondComment(id: String!, user: String!, responses: String!, commentId: ID!): Comment!
  }
    
`;