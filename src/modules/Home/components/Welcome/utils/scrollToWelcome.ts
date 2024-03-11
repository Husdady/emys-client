// Constants
import { scrollIntoViewStartSmoothArgs } from '@data/scroll'
import { WELCOME_ID } from '@modules/Home/components/Welcome/constants'

/**
 * Make scroll to the Welcome section
 */
export default function scrollToWelcome() {
  const welcome = document.getElementById(WELCOME_ID)

  if (welcome === null) return
  welcome.scrollIntoView(scrollIntoViewStartSmoothArgs)
}
