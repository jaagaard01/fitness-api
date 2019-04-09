// this will be the entry point for our server 
// autofilled from website needs to be edited 


const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')


const resolvers = {
  Query: {
    user: (_,args,context) => {
      return context.prisma.query.user(
        {
          where: {
            id: args.id
          },
          data:{
            firstName: args.firstName,
            lastName: args.lastName,
          },
        },
      )
    },

    templates: (_,args,context) => {
      return context.prisma.query.templates(
        {
          where: {
           OR: [
             {name_contains: args.searchString},
             {bodyType_contains: args.searchString},
           ],
           author: args.userId,
          },
          data:{
            name: args.name,
            bodyType: args.bodyType,
            id: args.id
          
          }
        },
      )
    },

    logs: (_args,context) => {
      return context.prisma.query.logs(
        {
          where: {
            id: args.id,
            author: args.userId
          },
          data:{
            name: args.Template,
            id: args.id,
            weight: arg.weight,
            reps: args.weight,
            bodyType: args.bodyType,
            author: args.authorId,

          }
        },
      )
    },
  },

  Mutation: {
    signup: (_,args,context) => {
      return context.prisma.mutation.createUser(
        {
          data:{
            firstName: args.firstName,
            lastName: args.lastName,
          },
        },
      )
    },
    createTemplate: (_,args,context) => {
      return context.prisma.mutation.createTemplate(
        {
          data:{
            name: args.name,
            bodyType: args.bodyType,
            description: args.description,
            author: {
              connect: {
                author: args.userId
              }
            }
          },
        },
      )
    },
    createLogs: (_args,context) => {
      return context.prisma.mutation.createLogs(
        {
          data:{
            name: args.name,
            bodyType: args.bodyType,
            weight: args.weight,
            reps: args.reps,
            date: args.date,
            template: {
              connect:{
                id: args.templateId
              },
            },
            author: {
              connect: {
                id: args.authorId
              },
            },
          },
        },
      )
    },
    updateUser: (_,args,context) => {
      return context.prisma.mutation.updateUser(
        {
          where:{
            id: args.id,
          },
          data:{
            firstName: args.firstName,
            lastName: args.lastName,
          },
        },
      )
    },
    updateTemplate: (_,args,context) => {
      return context.prisma.mutation.updateTemplate(
        {
          where: {
            id: args.templateId
          },
          data:{
            name: args.name,
            bodyType: args.bodyType,
            author: {
              connect:{
                id: args.userId
              },
            },
          },
        },
      )
    },
    updateLogs: (_,args,context) => {
      return context.prisma.mutation.updateLogs(
        {
          where: {
            id: args.logId
          },
          data:{
            name: args.name,
            bodyType: args.bodyType,
            weight: args.weight,
            reps: args.reps,
            date: args.date,
            template: {
              connect:{
                id: args.templateId
              },
            },
            author: {
              connect: {
                id: args.userId
              },
            },
          },
        },
      )
    },
    deleteUser: (_,args,context) => {
      return context.prisma.mutation.deleteUser(
        {
          where: {
            id: args.id
          },
        },
      )
    },
    deleteTemplate: (_,args,context) => {
      return context.prisma.mutation.deleteTemplate(
        {
          where: {
            id: args.templateId
          },
        },
      )
    },
    deleteLogs: (_,args,context) => {
      return context.prisma.mutation.deleteLogs(
        {
          where: {
            id: args.logId
          },
        },
      )
    },

  }
}


const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: './generated/prisma.graphql',
      endpoint: 'http://localhost:4466',
    }),
  }),
})
server.start(() => console.log(`GraphQL server is running on http://localhost:4000`))