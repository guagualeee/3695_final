# 3695-gql-final
Leo Liu A01019185

##  Instruction
'''
cd floder
npm install
npm start
'''
## Example querys
'''graphql
query{ 
  posts{ 
    id
    user
    topic
    content
    comments
  } 
}
query{ 
  postsByTopic(topic:"game"){ 
    id
    user
    topic
    content
    comments
  } 
}
mutation 
addPost { 
  addPost( 
    id:"3",
    user:"Devid",
    topic:"game",
    content:"test for posting",)
    {
    id
    user
    topic
    content
    comments
    }
}
mutation 
addComment { 
  addComment( 
    id:"3",
    user:"Tom",
    responses:"test for comment",
    postId:"2")
    {
    id
    user
    responses
    postId
    }
}
mutation 
respondComment { 
  respondComment( 
    id:"2",
    user:"Han",
    responses:"respond the seconed comment",
    commentId:"2")
    {
    id
    user
    responses
    commentId
    }
}
...
