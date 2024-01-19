// Librarys
import dynamic from 'next/dynamic'

// Hooks
import useLatestAddedTestimonials from './useLatestAddedTestimonials'

// Utils
import classnames from '@utils/classnames'

// Constants
import { LATEST_ADDED_TESTIMONIALS_ID } from './constants'

// Dynamic Components
// const Error = dynamic(() => import('./Error'))
const Header = dynamic(() => import('./Header'))
// const Products = dynamic(() => import('./Products'))
// const EmptyLatestProducts = dynamic(() => import('./EmptyLatestProducts'))

export default function LatestAddedTestimonials() {
  const { testimonials, isError, isLoading, hasEmptyTestimonials } = useLatestAddedTestimonials()

  return (
    <section
      id={LATEST_ADDED_TESTIMONIALS_ID}
      className={classnames([
        hasEmptyTestimonials ? 'pb-4 lg:pb-[3rem]' : 'pb-[0.65rem] sm:pb-4',
        'latest-added-testimonials mx-auto pt-[3rem] px-4 xl:px-0'
      ])}
    >
      <Header />

      {/* {isError && <Error />}

      {!isError && !isLoading && hasEmptyTestimonials && <EmptyLatestProducts />}

      {(isLoading || (!isError && !hasEmptyTestimonials)) && (
        <Products
          testimonials={testimonials}
          isLoading={isLoading}
          hasScrollbar={hasScrollbar}
          productItemsRef={productItemsRef}
        />
      )} */}
    </section>
  )
}
