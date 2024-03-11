// Constants
import { scrollIntoViewStartSmoothArgs } from '@data/scroll'
import { LATEST_ADDED_PRODUCTS_ID } from '@modules/Home/components/LatestAddedProducts/constants'

/**
 * Make scroll to the Latest Products section
 */
export default function scrollToLatestProducts() {
  const latestAddedProducts = document.getElementById(LATEST_ADDED_PRODUCTS_ID)

  if (latestAddedProducts === null) return
  latestAddedProducts.scrollIntoView(scrollIntoViewStartSmoothArgs)
}
