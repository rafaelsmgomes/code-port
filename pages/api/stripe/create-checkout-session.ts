import { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { getBaseUrl } from '../../../utils/runtime'
import { authOptions } from '../auth/[...nextauth]'
import { stripe } from '../../../lib/stripe/stripe'
import prisma from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // This object will contain the user's data if the user is signed in

  const session = await unstable_getServerSession(req, res, authOptions)
  if (!session?.user.id) {
    return res.status(401).json({
      error: {
        code: 'no-access',
        message: 'You are not signed in',
      },
    })
  }

  const dbUser = await prisma.user.findFirst({ where: { id: session.user.id } })
  if (!dbUser) {
    return res.status(400).json({
      error: {
        code: 'no-user',
        message: 'No such user in the DB',
      },
    })
  }

  const checkoutSession = await stripe.checkout.sessions
    .create({
      mode: 'subscription',
      // This is where the magic happens - this line will automatically link this Checkout page to the existing customer we created
      // when the user signed-up, so that when the webhook is called our database can automatically be updated correctly.
      // REV- this should be session.user.stripeCustomerId OR this might be the proper way to have it work
      customer: dbUser.stripeCustomerId as string,
      line_items: [{ price: process.env.STRIPE_PRODUCT_KEY, quantity: 1 }],
      // {CHECKOUT_SESSION_ID} is a string literal which the Stripe SDK will replace; do not manually change it or replace it with a variable!
      success_url: `${getBaseUrl()}/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${getBaseUrl()}/?cancelledPayment=true`,
      subscription_data: {
        metadata: {
          payingUserId: session.user.id,
        },
      },
    })
    .catch((err) => {
      console.log(err)
      throw new Error('Something went wrong in the checkout session', err)
    })

  if (!checkoutSession.url) {
    return res.status(500).json({ cpde: 'stripe-error', error: 'Could not create checkout session' })
  }

  // Return the newly-created checkoutSession URL and let the frontend render it
  return res.status(200).json({ redirectUrl: checkoutSession.url })
}
