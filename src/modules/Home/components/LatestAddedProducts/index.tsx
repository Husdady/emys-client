// Librarys
import dynamic from 'next/dynamic'

// Dynamic Components
const Header = dynamic(() => import('./Header'))

export default function LatestAddedProducts() {
  return (
    <section className="latest-added-products max-w-[1000px] mx-auto pb-5">
      <Header />
    </section>
  )
}
