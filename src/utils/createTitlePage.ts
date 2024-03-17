// Utils
import isFunction from './isFunction'

// Constants
import { APP_NAME } from '@config/envs'

type Cb = (appName: string) => string

const slogan = 'Variedad y Calidad'

/**
 * Create title of a page
 * @param {string|Cb} titlePage Title page
 * @returns {string} Title page
 */
export default function createTitlePage(titlePage: string | Cb): string {
  // Validate and execute callback
  if (isFunction(titlePage)) {
    return titlePage(`${APP_NAME}, ${slogan}`)
  }

  return `${titlePage} - ${APP_NAME}, ${slogan}`
}
