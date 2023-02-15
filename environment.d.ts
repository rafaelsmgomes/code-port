import { Mongoose } from 'mongoose'
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_CLIENT_ID: string
      GOOGLE_CLIENT_SECRET: string

      EMAIL_SERVER: string
      EMAIL_SERVER_HOST: string
      EMAIL_SERVER_PORT: number
      EMAIL_SERVER_USER: string
      EMAIL_SERVER_PASSWORD: string
      EMAIL_FROM: string

      REDIS_SECRET: string
      REDIS_HOST: string

      FMP_API_KEY: string
      FMP_URL: string

      NEXT_PUBLIC_ALGOLIA_APP_ID: string
      NEXT_PUBLIC_ALGOLIA_API_KEY: string

      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string
      STRIPE_SECRET_KEY: string
      STRIPE_PRODUCT_KEY: string
      STRIPE_ENDPOINT_SECRET: string

      AWS_ACCESS_KEY_ID: string
      AWS_ACCESS_KEY_ID: string
    }
    interface Global {
      prisma: any
    }
  }
}

// import type { DefaultUser } from 'next-auth'

// declare module 'next-auth' {
//   interface Session {
//     user?: DefaultUser & {
//       id: string
//       isActive: boolean
//     }
//   }
// }

export {}
