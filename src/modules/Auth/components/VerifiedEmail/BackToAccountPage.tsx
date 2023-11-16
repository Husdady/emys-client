// Librarys
import { Suspense, useCallback } from 'react'

// Components
import Login from '@assets/icons/login'
import Fallback from '@components/SubmitButton/Fallback'

// Hooks
import { useNavigate } from 'react-router-dom'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const SubmitButton = lazy(() => import('@components/SubmitButton'))

export default function BackToAccountPage() {
  const navigate = useNavigate()

  // Navigate to Account route
  const navigateToAccountPage = useCallback(() => {
    navigate('/dashboard/account', { replace: true })
  }, [])

  return (
    <Suspense fallback={<Fallback />}>
      <SubmitButton
        type="button"
        title="Volver a mi cuenta"
        icon={<Login size="md" className="mr-1" />}
        onClick={navigateToAccountPage}
      />
    </Suspense>
  )
}
