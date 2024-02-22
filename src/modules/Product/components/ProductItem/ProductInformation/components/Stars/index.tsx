// Components
import Star from '@assets/icons/star'

// Hooks
import useStars from './useStars'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import { stars } from './constants'

export default function Stars(product: Product) {
  const { setStars, starsGiven, prevStarsGiven, handleMouseEnter, handleMouseLeave } =
    useStars(product)

  return (
    <div className="stars-container mt-2 flex items-center gap-x-3 mb-3 border-b border-gray-300 pb-2.5 justify-between dark:border-gray-500">
      <ul className="stars flex items-center gap-x-2">
        {stars.map((i) => {
          const total = stars.length - i + 1
          const isActive = total <= starsGiven
          const isEqual = isActive && total === starsGiven && starsGiven === prevStarsGiven

          return (
            <li
              key={String(i)}
              role="button"
              onClick={() => setStars(total)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter(total)}
              title={`Calificar con ${total} estrella${total > 1 ? 's' : ''} a ${product.name}`}
              className={classnames([
                'star',
                isActive ? 'active' : null,
                isEqual ? 'normal-cursor' : null
              ])}
            >
              <Star size="xxl" />
            </li>
          )
        })}
      </ul>

      <h5 className="title mb-0 text-[1.02rem] text-gray-500 leading-tight text-right max-w-[300px] dark:text-gray-400">
        ¡Hola!, ¿Qué puntuación le darías al producto, de 1 a 5 estrellas?
      </h5>
    </div>
  )
}
