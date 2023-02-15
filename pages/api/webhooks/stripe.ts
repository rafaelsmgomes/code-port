import { NextApiRequest, NextApiResponse } from 'next'
import { buffer } from 'micro'
import Stripe from 'stripe'
import prisma from '../../../lib/prisma'

const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const requestBuffer = await buffer(req)
    const signature = req.headers['stripe-signature'] as string
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2020-08-27' })

    let event

    try {
      event = stripe.webhooks.constructEvent(requestBuffer.toString(), signature, endpointSecret)
    } catch (error: any) {
      console.log('Webhook signature verification failed', error.message)
      return res.status(400).send('Webhook signature verification failed')
    }

    switch (event.type) {
      case 'customer.subscription.created': {
        const subscription = event.data.object as Stripe.Subscription
        console.log('customer.subscription.created', { subscription })
        await prisma.user.update({
          where: { stripeCustomerId: subscription.customer as string },
          data: { isActive: true },
        })
        break
      }
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        const status = subscription.status
        await prisma.user.update({
          where: { stripeCustomerId: subscription.customer as string },
          data: { isActive: false },
        })
        console.log(`Subscription status is ${status}.`)
      }

      default:
        console.log(`Unhandled event type ${event.type}`)
        break
    }

    res.status(200).json({ received: true })
  } catch (err) {
    console.log(err)
    res.status(500).end()
  }
}
