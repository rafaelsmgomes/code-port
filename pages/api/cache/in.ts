import { NextApiRequest, NextApiResponse } from 'next'
import redis from '../../../lib/redis'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const result = await redis.set('name', 'rafael')
  res.status(200).json({ name: 'John Doe' })
}
