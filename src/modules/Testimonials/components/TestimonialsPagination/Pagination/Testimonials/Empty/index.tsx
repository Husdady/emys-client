// Components
import EmptyScreen from '@components/EmptyScreen'

// Hooks
import { useSearchParams } from 'next/navigation'

// Constants
import { EMPTY_TESTIMONIALS, EMPTY_FILTERED_TESTIMONIALS } from './constants'

export default function EmptyTestimonials() {
  const searchParams = useSearchParams()

  return (
    <EmptyScreen
      description={searchParams.size <= 0 ? EMPTY_TESTIMONIALS : EMPTY_FILTERED_TESTIMONIALS}
    />
  )
}
