// Librarys
import dynamic from 'next/dynamic'

// Hooks
import useLatestAddedTestimonials from './useLatestAddedTestimonials'

// Utils
import classnames from '@utils/classnames'

// Constants
import { LATEST_ADDED_TESTIMONIALS_ID } from './constants'

// Dynamic Components
const Error = dynamic(() => import('./Error'))
const Header = dynamic(() => import('./Header'))
const Testimonials = dynamic(() => import('./Testimonials'))
const EmptyLatestTestimonials = dynamic(() => import('./EmptyLatestTestimonials'))

export default function LatestAddedTestimonials() {
  const { testimonials, isError, isLoading, hasEmptyTestimonials } = useLatestAddedTestimonials()

  return (
    <section
      id={LATEST_ADDED_TESTIMONIALS_ID}
      className={classnames([
        isError ? 'pb-[1.15rem]' : null,
        isLoading ? 'lg:!pb-[1.25rem]' : null,
        isError || isLoading ? 'pt-[2.2rem]' : null,
        isError || (!isLoading && hasEmptyTestimonials) ? 'white-screen' : 'pt-[4rem]',
        !isError && hasEmptyTestimonials ? 'pb-4 lg:pb-[4rem]' : 'pb-[1.65rem] sm:pb-4',
        'latest-added-testimonials mx-auto px-4 xl:px-0'
      ])}
    >
      {!isError && <Header />}

      {isError && <Error />}
      {!isError && !isLoading && hasEmptyTestimonials && <EmptyLatestTestimonials />}

      {(isLoading || (!isError && !hasEmptyTestimonials)) && (
        <Testimonials testimonials={testimonials} isLoading={isLoading} />
      )}
    </section>
  )
}
