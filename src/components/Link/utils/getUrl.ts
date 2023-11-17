// Librarys
import { addBasePath } from 'next/dist/client/add-base-path'

/**
 * Get URL
 * @param {string} href Href path
 * @returns {URL} Url
 */
export default function getUrl(href: string): URL {
  return new URL(addBasePath(href), location.href)
}
