// Librarys
import dynamic from 'next/dynamic'

// Data
import cards from './card-list'

// Dynamic Components
const HomeCard = dynamic(() => import('@modules/Home/components/Card'))

export default function SeytuCardList() {
  return (
    <ul className="seytu-card-list flex items-center justify-center gap-3 justify-between">
      {cards.map((card) => (
        <li key={card.id} className="seytu-card-item">
          <HomeCard {...card} />
        </li>
      ))}
    </ul>
  )
}
