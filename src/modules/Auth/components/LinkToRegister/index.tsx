// Librarys
import dynamic from 'next/dynamic'

// Constants
import { REGISTER_PATH } from '@assets/data/paths'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))

export default function LinkToRegister() {
  return (
    <div className="register-link-container text-sm font-light text-gray-600 dark:text-gray-400 leading-tight mb-1 sm:mb-0">
      <span className="text font-lexend text-[0.91rem] mr-[0.35rem]">
        ¿Aún no tienes una cuenta?
      </span>

      <Link
        href={REGISTER_PATH}
        className="link-to-register-form font-semibold text-main-700 dark:!text-pink-300 hover:underline"
      >
        Crear cuenta
      </Link>
    </div>
  )
}
