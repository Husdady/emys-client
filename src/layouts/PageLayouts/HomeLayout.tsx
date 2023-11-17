// Librarys
import dynamic from 'next/dynamic'

// Dynamic Components
const Welcome = dynamic(() => import('@modules/Home/components/Welcome'))

export default function HomeLayout() {
  return (
    <>
      <Welcome />
    </>
  )
}
