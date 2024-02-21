// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Components
import Eye from '@assets/icons/eye'
import LongArrowLeft from '@assets/icons/long-arrow-left'
import LongArrowRight from '@assets/icons/long-arrow-right'

// Interfaces
import { HeaderProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import { sharedClassName } from './constants'
import { PRODUCTS_PATH } from '@assets/data/paths'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))
const Button = dynamic(() => import('@components/Button'))

function Header({
  showNextProducts,
  showPreviousProducts,
  isDisabledNextArrow,
  isDisabledPreviousArrow
}: HeaderProps) {
  return (
    <div className="latest-added-products-header flex flex-wrap items-center justify-between px-3 max-w-[1100px] mx-auto gap-x-[2.5rem] gap-y-4">
      <h5 className="text-3xl font-lexend text-pink-500 dark:text-rose-300 break-word">
        Últimos productos agregados
      </h5>

      <div className="flex items-center gap-x-2 inner-wrapper">
        <Link
          href={PRODUCTS_PATH}
          title="Ver todos los productos"
          className={classnames([
            sharedClassName,
            'see-all-products-link py-2 !px-4 gap-x-1.5 me-2 flex items-center justify-center font-poppins dark:font-semibold hover:underline'
          ])}
        >
          <Eye className="sm" />
          <span>Ver todos los productos</span>
        </Link>

        <div className="flex items-center gap-x-1.5 arrows-wrapper">
          <Button
            title=""
            onClick={showPreviousProducts}
            disabled={isDisabledPreviousArrow}
            icon={<LongArrowLeft size="smd" onClick={showPreviousProducts} />}
            className={classnames([sharedClassName, 'btn-show-previous-products py-1 !px-3 scale'])}
          />

          <Button
            title=""
            onClick={showNextProducts}
            disabled={isDisabledNextArrow}
            icon={<LongArrowRight size="smd" onClick={showNextProducts} />}
            className={classnames([sharedClassName, 'btn-show-next-products py-1 !px-3 scale'])}
          />
        </div>
      </div>
    </div>
  )
}

export default memo(Header, (prevProps, nextProps) => {
  return (
    prevProps.isDisabledNextArrow === nextProps.isDisabledNextArrow &&
    prevProps.isDisabledPreviousArrow === nextProps.isDisabledPreviousArrow
  )
})
