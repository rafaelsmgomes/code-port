import { NextApiRequest, NextApiResponse } from 'next'
import redis from '../../../lib/redis'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const flushed = await redis.flushall()

  res.status(200).json({ flushed })
}
