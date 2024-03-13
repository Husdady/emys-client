// Librarys
import dynamic from 'next/dynamic'

// Hooks
import useLatestAddedTestimonials from './useLatestAddedTestimonials'

// Constants
import { LATEST_ADDED_TESTIMONIALS_ID } from './constants'

// Dynamic Components
const Empty = dynamic(() => import('./Empty'))
const Error = dynamic(() => import('./Error'))
const Header = dynamic(() => import('./Header'))
const Testimonials = dynamic(() => import('./Testimonials'))

export default function LatestAddedTestimonials() {
  const { testimonials, isError, isLoading, hasEmptyTestimonials } = useLatestAddedTestimonials()

  // Show Error view
  if (isError) return <Error />

  // Show Empty view
  if (!isLoading && hasEmptyTestimonials) {
    return <Empty />
  }

  return (
    <section
      id={LATEST_ADDED_TESTIMONIALS_ID}
      className="latest-added-testimonials mx-auto px-4 xl:px-0 pt-[2.5rem] sm:pt-[3rem]"
    >
      <Header />
      <Testimonials isLoading={isLoading} testimonials={testimonials} />
    </section>
  )
}
