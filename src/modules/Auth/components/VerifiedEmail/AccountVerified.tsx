// Components
import Note from '@modules/Auth/components/Note'
import Message from '@modules/Auth/components/Message'
import BackToLogin from '@modules/Auth/components/BackToLogin'
import BackToAccountPage from './BackToAccountPage'

// Hooks
import useAuth from '@hooks/useAuth'
import useMounted from '@hooks/useMounted'

// Constants
import { succesMessageProps } from '@modules/Auth/components/Message/constants'

// Styles
import '@routes/AuthRoute/styles.scss'

export default function AccountVerified() {
  const auth = useAuth()

  useMounted(() => {
    if (auth.user !== null) {
      if (auth.user.status === 'unverified') {
        auth.updateUser({ status: 'verified' })
      }
    }
  }, [])

  return (
    <div className="flex flex-col gap-y-4">
      <Message value="Tu cuenta se ha verificado correctamente" {...succesMessageProps} />

      <Note value="Tu cuenta ha sido verificada correctamente. Ahora puedes iniciar sesión sin problemas. El botón de abajo, te llevará al inicio de sesión, para que puedas entrar en la aplicación" />

      {auth.user === null && auth.token === null && <BackToLogin />}
      {auth.user !== null && auth.token !== null && <BackToAccountPage />}
    </div>
  )
}
