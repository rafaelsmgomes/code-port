import NextAuth, { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'

import { stripe } from '../../../lib/stripe/stripe'
import prisma from '../../../lib/prisma'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/auth/signin',
    verifyRequest: '/auth/verify-request',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    EmailProvider({
      // Check mailtrap to see the test emails
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  // debug: true, // DEV - remove when in prod
  callbacks: {
    async session({ session, user }) {
      if (!session.user) return session
      session.user.id = user.id
      session.user.isActive = user.isActive

      return session
    },
  },
  events: {
    createUser: async ({ user }) => {
      await stripe.customers.create({ email: user.email! }).then(async (customers) =>
        prisma.user.update({
          where: { id: user.id },
          data: { stripeCustomerId: customers.id },
        })
      )
    },
  },
}

export default NextAuth(authOptions)
