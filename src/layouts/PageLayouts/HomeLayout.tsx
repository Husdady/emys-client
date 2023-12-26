// Librarys
import dynamic from 'next/dynamic'

// Dynamic Components
const Welcome = dynamic(() => import('@modules/Home/components/Welcome'))
const LatestAddedProducts = dynamic(() => import('@modules/Home/components/LatestAddedProducts'))

export default function HomeLayout() {
  return (
    <>
      <Welcome />
      <LatestAddedProducts />
    </>
  )
}
