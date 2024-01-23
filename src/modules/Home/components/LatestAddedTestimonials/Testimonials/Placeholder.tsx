// Components
import TestimonyPlaceholder from '@modules/Testimonials/components/Testimony/Placeholder'

// Utils
import createList from '@utils/createList'

// Constants
import { LIMIT_LATEST_TESTIMONIALS } from '@modules/Home/components/LatestAddedTestimonials/constants'

export default function Placeholder() {
  return (
    <ul className="my-[2.5rem] testimony-items flex !flex-wrap items-center justify-center pb-4 gap-y-2.5 sm:gap-y-3.5 gap-x-2 sm:gap-x-2.5">
      {createList(LIMIT_LATEST_TESTIMONIALS).map((i) => (
        <li key={String(i)} className="testimony-item min-w-[550px] max-w-[550px]">
          <TestimonyPlaceholder />
        </li>
      ))}
    </ul>
  )
}
