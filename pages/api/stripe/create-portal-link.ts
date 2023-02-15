import { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'

import { stripe } from '../../../lib/stripe/stripe'
import prisma from '../../../lib/prisma'
import { getBaseUrl } from '../../../utils/runtime'
import { authOptions } from '../auth/[...nextauth]'

const createPortalLink = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const session = await unstable_getServerSession(req, res, authOptions)
      if (!session?.user.id) {
        return res.status(401).json({
          error: {
            code: 'no-access',
            message: 'You are not signed in',
          },
        })
      }
      // TODO-get user from DB
      const dbUser = await prisma.user.findFirst({ where: { id: session.user.id } })

      // if no user, thrown error
      if (!dbUser) {
        return res.status(400).json({
          error: {
            code: 'no-user',
            message: 'No such user in the DB',
          },
        })
      }
      // if no stripe customer -> throw new Error
      if (!dbUser.stripeCustomerId) {
        return res.status(400).json({
          error: {
            code: 'no-stripe-customer',
            message: 'No payment record for this user',
          },
        })
      }

      // return url for stripe billing portal
      const { url } = await stripe.billingPortal.sessions.create({
        customer: dbUser.stripeCustomerId as string,
        return_url: `${getBaseUrl()}/account`,
      })
      return res.status(200).json({ url })
    } catch (err: any) {
      console.log(err)
      res.status(500).json({ error: { statusCode: 500, message: err.message } })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

export default createPortalLink

// TODO-Add manage subscription button to user dropdown
