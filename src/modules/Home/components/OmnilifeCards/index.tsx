// Librarys
import dynamic from 'next/dynamic'

// Hooks
import useOmnilifeCards from './useOmnilifeCards'

// Data
import cards from './card-list'

// Dynamic Components
const HomeCard = dynamic(() => import('@modules/Home/components/Card'))

export default function OmnilifeCards() {
  const { createCardAction } = useOmnilifeCards()

  return (
    <section className="omnilife-cards">
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
