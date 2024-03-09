// Librarys
import dynamic from 'next/dynamic'

// Hooks
import useSeytuCards from './useSeytuCards'

// Data
import cards from './cardList'

// Dynamic Components
const HomeCard = dynamic(() => import('@modules/Home/components/Card'))

export default function SeytuCards() {
  const { createCardAction } = useSeytuCards()

  return (
    <section className="seytu-cards">
      <div className="inner-wrapper">
        <ul className="card-list">
          {cards.map((card) => (
            <li key={card.id} className="card-item">
              <HomeCard {...card} onClick={createCardAction(card.id as string)} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
