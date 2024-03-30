// Components
import Placeholder from '@modules/Testimonials/components/Testimony/Placeholder'

// Hooks
import useDocumentCount from '@hooks/useDocumentCount'

// Utils
import createList from '@utils/createList'

// Constants
import { TESTIMONIALS_COUNT } from './constants'
import { LIMIT } from '@modules/Testimonials/api/constants'

export default function TestimonialsPlaceholder() {
  // Get count of the filtered documents
  const count = useDocumentCount({
    defaultLimit: LIMIT,
    filterId: TESTIMONIALS_COUNT
  })

  return (
    <ul className="testimony-list">
      {createList(count).map((i) => (
        <li key={String(i)} className="testimony-item">
          <Placeholder />
        </li>
      ))}
    </ul>
  )
}
