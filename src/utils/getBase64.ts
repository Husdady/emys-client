// Librarys
import { getPlaiceholder } from 'plaiceholder'

/**
 * Get Base 64 of an Image
 * @param {string} imageUrl Image URL
 */
export default async function getBase64(imageUrl: string) {
  try {
    // console.log({ imageUrl })
    // // Fetch Image Url
    // const res = await fetch(imageUrl)

    // // Validates response
    // if (!res.ok) {
    //   throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)
    // }

    // // Get buffer
    // const buffer = await res.arrayBuffer()

    // // Get Base 64 of the Image
    // const { base64 } = await getPlaiceholder(Buffer.from(buffer))

    // return base64

    const buffer = await fetch(imageUrl).then(async (res) => Buffer.from(await res.arrayBuffer()))

    const data = await getPlaiceholder(buffer)
    return data
    // console.log('[2222]')
  } catch (e) {
    console.log({ e })
    if (e instanceof Error) console.log(e.stack)
  }
}
