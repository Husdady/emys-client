// Librarys
import { getPlaiceholder } from 'plaiceholder'

// Types
import type { NextApiRequest, NextApiResponse } from 'next'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

// Constants
import { PUBLIC_URL } from '@config/envs'

/**
 * Callback for create an Image base 64
 * @param {NextApiRequest} req Request object
 * @param {NextApiResponse} res Response object
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { src } = req.query

  if (!isString(src) || isEmptyString(src)) {
    return res.status(400).json({ error: 'Missing "src" query parameter' })
  }
  console.log({ src })
  try {
    // Fetch Image Url
    const response = await fetch(`${PUBLIC_URL}${src as string}`)
    console.log({ response })
    // Validates response
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`)
    }

    // Get buffer
    const buffer = await response.arrayBuffer()

    // Get Base 64 of the Image
    const { base64 } = await getPlaiceholder(Buffer.from(buffer))
    return res.status(200).json({ base64 })
  } catch (error) {
    console.error('Error generating placeholder:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
