// Hooks
import useAuth from '@hooks/useAuth'

export default function Instructions() {
  const auth = useAuth() // Get authentication

  // Return null is user not exists or the user is unauthenticated
  if (auth.user === null) return null

  return (
    <div>
      A continuación escribe{' '}
      <span className="text-red-600 dark:text-red-500">
        &apos;Soy {auth.user.fullname} y quiero eliminar mi cuenta.&apos;
      </span>{' '}
      sin las comillas en el campo de abajo para poder continuar
    </div>
  )
}
