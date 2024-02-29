// Librarys
import { memo } from 'react'

// Components
import Star from '@assets/icons/star'
import Button from '@components/Button'

// Hooks
import useStars from './useStars'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import { stars } from './constants'

function Stars(product: Product) {
  const { isRating, setStars, starsGiven, prevStarsGiven, handleMouseEnter, handleMouseLeave } =
    useStars(product)

  return (
    <div className="stars-container mt-2 flex items-center gap-x-3 justify-between">
      <ul className="stars flex flex-nowrap items-center">
        {stars.map((i) => {
          const total = stars.length - i + 1
          const isActive = total <= starsGiven
          const isEqual = isActive && total === starsGiven && starsGiven === prevStarsGiven

          return (
            <li
              key={String(i)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter(total)}
              title={`Calificar con ${total} estrella${total > 1 ? 's' : ''} a ${product.name}`}
              className={classnames([
                'star',
                isRating ? 'rating' : null,
                isActive ? 'active' : null,
                isEqual ? 'normal-cursor' : null
              ])}
            >
              <Button
                title=""
                disabled={isRating}
                className="btn-star bg-transparent !p-[0.3rem]"
                onClick={() => (isEqual ? null : setStars(total))}
                icon={<Star size="xxl" />}
              />
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

export default memo(Stars)
