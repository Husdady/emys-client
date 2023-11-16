// Librarys
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Suspense, useCallback } from 'react'

// Components
import Login from '@assets/icons/login'
import Fallback from '@components/SubmitButton/Fallback'

// Constants
import { LOGIN_PATH } from '@root/src/components/Header/Navigation'

// Dynamic components
const SubmitButton = dynamic(() => import('@components/SubmitButton'), { loading: Fallback })

export default function BackToLogin() {
  const router = useRouter()

  // Navigate to Login route
  const navigateToLogin = useCallback(() => router.push(LOGIN_PATH), [])

  return (
    <Suspense fallback={<Fallback />}>
      <SubmitButton
        type="button"
        title="Volver al inicio de sesión"
        icon={<Login size="md" className="mr-1" />}
        onClick={navigateToLogin}
      />
    </Suspense>
  )
}
