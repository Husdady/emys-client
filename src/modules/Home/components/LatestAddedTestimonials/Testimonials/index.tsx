// Librarys
import { Suspense } from 'react'

// Components
import InputSearch from './InputSearch'
import Placeholder from './Placeholder'
import TestimonyPlaceholder from '@modules/Testimonials/components/Testimony/Placeholder'

// Hooks
import useTestimonials from './useTestimonials'

// Interfaces
import { TestimonialsProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'
import isEmptyArray from '@utils/isEmptyArray'

// Constants
import { TESTIMONY_ITEMS_ID } from './constants'

// Lazy Components
const Testimony = lazy(() => import('@modules/Testimonials/components/Testimony'))

export default function Testimonials({ isLoading, testimonials }: TestimonialsProps) {
  const { results, setResults } = useTestimonials({ testimonials, isLoading })

  return (
    <section id="testimonials" className="mt-[1.5rem] mx-auto max-w-[1200px]">
      <InputSearch testimonials={testimonials} setResults={setResults} />

      {isLoading && <Placeholder />}

      {!isLoading && Array.isArray(testimonials) && !isEmptyArray(testimonials) && (
        <ul
          id={TESTIMONY_ITEMS_ID}
          className="testimony-items mt-[2rem] lg:mt-[2.15rem] flex gap-y-2.5 sm:gap-y-3.5 gap-x-2 pb-[2.5rem] relative sm:gap-x-2.5 justify-center"
        >
          {results.map((testimony) => (
            <li key={testimony.id} className="testimony-item min-w-[550px] max-w-[550px]">
              <Suspense fallback={<TestimonyPlaceholder />}>
                <Testimony {...testimony} />
              </Suspense>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}