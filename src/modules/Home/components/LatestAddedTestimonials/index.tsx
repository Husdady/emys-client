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
        'latest-added-testimonials mx-auto px-4 xl:px-0',
        !isError && !hasEmptyTestimonials ? 'pt-[3rem]' : null,
        isError || (!isLoading && hasEmptyTestimonials) ? 'white-screen' : null
      ])}
    >
      {isError && <Error />}
      {(isLoading || (!isError && !hasEmptyTestimonials)) && <Header />}
      {!isError && !isLoading && hasEmptyTestimonials && <EmptyLatestTestimonials />}

      {(isLoading || (!isError && !hasEmptyTestimonials)) && (
        <Testimonials isLoading={isLoading} testimonials={testimonials} />
      )}
    </section>
  )
}
