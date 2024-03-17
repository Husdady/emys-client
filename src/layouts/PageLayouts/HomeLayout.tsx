// Librarys
import dynamic from 'next/dynamic'

// Dynamic Components
const Contact = dynamic(() => import('@modules/Home/components/Contact'))
const Welcome = dynamic(() => import('@modules/Home/components/Welcome'))
const SeytuCards = dynamic(() => import('@modules/Home/components/SeytuCards'))
const OmnilifeCards = dynamic(() => import('@modules/Home/components/OmnilifeCards'))
const LatestAddedProducts = dynamic(() => import('@modules/Home/components/LatestAddedProducts'))
const LatestAddedTestimonials = dynamic(
  () => import('@modules/Home/components/LatestAddedTestimonials')
)
const LatestRegisteredSellers = dynamic(
  () => import('@modules/Home/components/LatestRegisteredSellers')
)

export default function HomeLayout() {
  return (
    <div>
      <Welcome />
      <LatestAddedProducts />
      <SeytuCards />
      <LatestRegisteredSellers />
      <OmnilifeCards />
      <LatestAddedTestimonials />
      <Contact />
    </div>
  )
}
