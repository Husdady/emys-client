// Librarys
import { memo, useMemo } from 'react'

// Components
import Empty from './Empty'
import Placeholder from './Placeholder'
import Testimony from '@modules/Testimonials/components/Testimony'

// Interfaces
import { TestimonialsProps } from './interfaces'

// Utils
import isUndefined from '@utils/isUndefined'
import isEmptyArray from '@utils/isEmptyArray'

function Testimonials({ docs, isFetching }: TestimonialsProps) {
  // Get social networks from docs
  const testimonials = useMemo(() => {
    if (isUndefined(docs)) return []
    return docs
  }, [docs])

  if (isFetching) return <Placeholder />
  if (isEmptyArray(testimonials)) return <Empty />

  return (
    <ul className="testimony-list">
      {testimonials.map((testimony, i) => (
        <li key={isUndefined(testimony.id) ? String(i) : testimony.id} className="testimony-item">
          <Testimony {...testimony} />
        </li>
      ))}
    </ul>
  )
}

export default memo(Testimonials, (prevProps, nextProps) => {
  return prevProps.isFetching === nextProps.isFetching
})
