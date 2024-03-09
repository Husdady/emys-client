// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Components
import LongArrowLeft from '@components/Icons/LongArrowLeft'
import LongArrowRight from '@components/Icons/LongArrowRight'

// Hooks
import useMobileScreen from '@hooks/useMobileScreen'

// Interfaces
import { ProductsHeaderProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import { sharedClassName } from './constants'

// Dynamic Components
const Button = dynamic(() => import('@components/Button'))

function ProductsHeader({
  title,
  className,
  onNext,
  onPrevious,
  isDisabledNextArrow,
  isDisabledPreviousArrow
}: ProductsHeaderProps) {
  const isMobileScreen = useMobileScreen()

  return (
    <div className={classnames([className, 'products-header xl:pl-3.5 xl:pr-2'])}>
      <h5 className="main-title text-black font-semibold underline">{title}</h5>

      {!isMobileScreen && (
        <div className="arrows-wrapper">
          <Button
            title=""
            onClick={onPrevious}
            disabled={isDisabledPreviousArrow}
            icon={<LongArrowLeft size="lg" onClick={onPrevious} />}
            className={classnames([sharedClassName, 'btn-show-previous-products'])}
          />

          <Button
            title=""
            onClick={onNext}
            disabled={isDisabledNextArrow}
            icon={<LongArrowRight size="lg" onClick={onNext} />}
            className={classnames([sharedClassName, 'btn-show-next-products'])}
          />
        </div>
      )}
    </div>
  )
}

export default memo(ProductsHeader, (prevProps, nextProps) => {
  return (
    prevProps.onNext === nextProps.onNext &&
    prevProps.onPrevious === nextProps.onPrevious &&
    prevProps.isDisabledNextArrow === nextProps.isDisabledNextArrow &&
    prevProps.isDisabledPreviousArrow === nextProps.isDisabledPreviousArrow
  )
})
