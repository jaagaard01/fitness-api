// this will be the entry point for our server 
// autofilled from website needs to be edited 


const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

const resolvers = {
  Query: {
    posts: (_, args, context, info) => {
      // ...
    },
    user: (_, args, context, info) => {
      // ...
    }
  },
  Mutation: {
    createDraft: (_, args, context, info) => {
      // ...
    },
    publish: (_, args, context, info) => {
      // ...
    },
    deletePost: (_, args, context, info) => {
      // ...
    },
    signup: (_, args, context, info) => {
      // ...
    }
  }
}

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: 'generated/prisma.graphql',
      endpoint: 'http://localhost:4466',
    }),
  }),
})
server.start(() => console.log(`GraphQL server is running on http://localhost:4000`))