// Librarys
import dynamic from 'next/dynamic'

// Constants
import { LATEST_ADDED_PRODUCTS_ID } from './constants'

// Dynamic Components
const Header = dynamic(() => import('./Header'))
const Products = dynamic(() => import('./Products'))

export default function LatestAddedProducts() {
  return (
    <section
      id={LATEST_ADDED_PRODUCTS_ID}
      className="latest-added-products mx-auto pt-4 pb-[3.5rem] px-4 xl:px-0"
    >
      <Header />
      <Products />
    </section>
  )
}
