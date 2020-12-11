import apolloServer from 'apollo-server'
import { typeDefs } from './models/typeDefs.js'
import { resolvers } from './models/resolvers.js'
const { ApolloServer } = apolloServer

const start = async () => {
    const server = new ApolloServer({typeDefs, resolvers})
    server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
        console.log(`Server ready at ${url}`);
    });
}

start()
