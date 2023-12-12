/* eslint-disable @typescript-eslint/no-misused-promises */
// Components
import Logout from '@assets/icons/logout'
import SubmitButton from '@components/SubmitButton'

// Hooks
import useAuth from '@hooks/useAuth'

export default function SignOut() {
  const auth = useAuth()

  return (
    <SubmitButton
      onClick={auth.signOut}
      icon={<Logout size="smd" />}
      loadingTitle="Cerrando sesión..."
      title="Cerrar sesión"
    />
  )
}
