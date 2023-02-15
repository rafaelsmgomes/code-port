import { useResponseCache } from '@envelop/response-cache'
import { createRedisCache } from '@envelop/response-cache-redis'
import { createServer } from '@graphql-yoga/node'
import { NextApiRequest, NextApiResponse } from 'next'
import resolvers from '../../graphql/resolvers'
import typeDefs from '../../graphql/schemas/schemas'
import redis from '../../lib/redis'
import prisma from '../../lib/prisma'
import { Session, unstable_getServerSession } from 'next-auth'
import { apiFetcher } from '../../lib/axiosApi'
import { PrismaClient } from '@prisma/client'
import { authOptions } from './auth/[...nextauth]'

const cache = createRedisCache({ redis })

export interface GraphqlContext {
  prisma: PrismaClient
  session: Session | null
  req: NextApiRequest
  res: NextApiResponse
}

const server = createServer<{ req: NextApiRequest; res: NextApiResponse }>({
  schema: {
    typeDefs: typeDefs,
    resolvers,
  },
  context: async ({ req, res }) => {
    const session = await unstable_getServerSession(req, res, authOptions)
    return { req, res, prisma, session, apiFetcher }
  },
  plugins: [
    /* eslint-disable */
    useResponseCache({
      cache,
      includeExtensionMetadata: true,
      ttl: 1000 * 360, //1h
      enabled: (ctx) => {
        const { session } = ctx as GraphqlContext
        return Boolean(session?.user)
      },
      session: (ctx) => null,
    }),
  ],
  endpoint: '/api/graphql',
  graphiql: process.env.NODE_ENV === 'development',
})

export default server
