// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Components
import Eye from '@components/Icons/Eye'
import LongArrowLeft from '@components/Icons/LongArrowLeft'
import LongArrowRight from '@components/Icons/LongArrowRight'

// Hooks
import useMobileScreen from '@hooks/useMobileScreen'

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
  const isMobileScreen = useMobileScreen()

  return (
    <div className="latest-added-products-header max-w-[990px] xl:max-w-[1055px] 2xl:max-w-[1360px]">
      <h5 className="main-title text-pink-500 dark:text-rose-300 mx-4 md:mx-0">Últimos productos agregados</h5>

      <div className="flex items-center gap-x-2 inner-wrapper md:min-w-[341px]">
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

        {!isMobileScreen && (
          <div className="arrows-wrapper">
            <Button
              title=""
              onClick={showPreviousProducts}
              disabled={isDisabledPreviousArrow}
              icon={<LongArrowLeft size="lg" onClick={showPreviousProducts} />}
              className={classnames([sharedClassName, 'btn-show-previous-products'])}
            />

            <Button
              title=""
              onClick={showNextProducts}
              disabled={isDisabledNextArrow}
              icon={<LongArrowRight size="lg" onClick={showNextProducts} />}
              className={classnames([sharedClassName, 'btn-show-next-products'])}
            />
          </div>
        )}
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
