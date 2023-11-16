// Librarys
import { Suspense } from 'react'

// Components
import FallbackItem from './FallbackItem'

// Interfaces
import { FallbackProps } from './interfaces'

export default function Fallback({ children, ...props }: FallbackProps) {
  return <Suspense fallback={<FallbackItem {...props} />}>{children}</Suspense>
}
