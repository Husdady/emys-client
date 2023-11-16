// Librarys
import dynamic from 'next/dynamic'

// Components
import Login from '@assets/icons/login'
import Fallback from '@components/SubmitButton/Fallback'

// Hooks
import { useCallback } from 'react'
import { useRouter } from 'next/router'

// Lazy Components
const SubmitButton = dynamic(() => import('@components/SubmitButton'), { loading: Fallback })

export default function BackToAccountPage() {
  const router = useRouter()

  // Navigate to Account route
  const navigateToAccountPage = useCallback(() => router.push('/cuenta'), [])

  return (
    <SubmitButton
      type="button"
      title="Volver a mi cuenta"
      icon={<Login size="md" className="mr-1" />}
      onClick={navigateToAccountPage}
    />
  )
}
