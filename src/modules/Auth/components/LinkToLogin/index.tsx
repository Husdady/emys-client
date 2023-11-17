// Components
import dynamic from 'next/dynamic'

// Constants
import { LOGIN_PATH } from '@assets/paths'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))

export default function LinkToLogin() {
  return (
    <p className="text-sm font-light text-gray-600 dark:text-gray-400 py-1">
      <span className="font-lexend"> ¿Ya tienes una cuenta?</span>

      <Link
        href={LOGIN_PATH}
        className="ml-[0.35rem] font-semibold text-main-700 dark:text-main-200 hover:underline"
      >
        Iniciar sesión
      </Link>
    </p>
  )
}
