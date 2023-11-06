// Librarys
import dynamic from 'next/dynamic'

// Dynamic Components
// const Navigation = dynamic(() => import('./Navigation'))
const BackgroundImage = dynamic(() => import('./BackgroundImage'))

export default function Header() {
  return (
    <header className="position-relative overflow-hidden">
      <BackgroundImage />
      {/* <Navigation /> */}
    </header>
  )
}
