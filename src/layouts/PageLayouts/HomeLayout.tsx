// Librarys
import dynamic from 'next/dynamic'

// Dynamic Components
const Welcome = dynamic(() => import('@modules/Home/components/Welcome'))
const SeytuCards = dynamic(() => import('@modules/Home/components/SeytuCards'))
const OmnilifeCards = dynamic(() => import('@modules/Home/components/OmnilifeCards'))
const LatestAddedProducts = dynamic(() => import('@modules/Home/components/LatestAddedProducts'))

export default function HomeLayout() {
  return (
    <>
      <Welcome />
      <LatestAddedProducts />
      <SeytuCards />
      <div className="h-[500px]"></div>
      <OmnilifeCards />
      <div className="h-[500px]"></div>
    </>
  )
}
