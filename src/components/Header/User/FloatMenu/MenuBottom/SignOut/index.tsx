/* eslint-disable @typescript-eslint/no-misused-promises */
// Components
import Logout from '@assets/icons/logout'
import SubmitButton from '@components/SubmitButton'

// Hooks
import useSignOut from './useSignOut'

export default function SignOut() {
  const { handleSignOut } = useSignOut()

  return (
    <SubmitButton
      onClick={handleSignOut}
      icon={<Logout size="smd" />}
      loadingTitle="Cerrando sesión..."
      title="Cerrar sesión"
    />
  )
}
