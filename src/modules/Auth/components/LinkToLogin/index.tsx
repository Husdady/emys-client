// Components
import dynamic from 'next/dynamic'

// Constants
import { LOGIN_PATH } from '@assets/data/paths'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))

export default function LinkToLogin() {
  return (
    <div className="login-link-container text-sm font-light text-gray-600 dark:text-gray-400 py-1">
      <span className="font-lexend"> ¿Ya tienes una cuenta?</span>

      <Link
        href={LOGIN_PATH}
        className="link-to-login-form ml-[0.35rem] font-semibold text-main-700 dark:text-pink-300 hover:underline"
      >
        Iniciar sesión
      </Link>
    </div>
  )
}
