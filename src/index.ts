import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated/prisma'
import {Context} from "./utils"
import resolvers from './resolvers'

const db  = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT,
  debug: true
});

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))
