// Librarys
import { Suspense } from 'react'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const Note = lazy(() => import('./Note'))
const ConfirmForm = lazy(() => import('./ConfirmForm'))

export default function UserConsent() {
  return (
    <div>
      <Suspense fallback={null}>
        <Note />
      </Suspense>

      <Suspense fallback={null}>
        <ConfirmForm />
      </Suspense>
    </div>
  )
}
