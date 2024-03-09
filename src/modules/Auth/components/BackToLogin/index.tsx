// Librarys
import { useCallback } from 'react'
import { useRouter } from 'next/router'

// Components
import Login from '@components/Icons/Login'
import SubmitButton from '@components/SubmitButton'

// Constants
import { LOGIN_PATH } from '@assets/data/paths'

export default function BackToLogin() {
  const router = useRouter()

  // Navigate to Login route
  const navigateToLogin = useCallback(() => router.push(LOGIN_PATH), [])

  return (
    <SubmitButton
      type="button"
      title="Volver al inicio de sesión"
      icon={<Login size="md" className="mr-1" />}
      onClick={navigateToLogin}
    />
  )
}
