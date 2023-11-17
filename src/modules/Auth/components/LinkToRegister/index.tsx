// Librarys
import dynamic from 'next/dynamic'

// Constants
import { REGISTER_PATH } from '@assets/paths'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))

export default function LinkToRegister() {
  return (
    <p className="text-sm font-light text-gray-600 dark:text-gray-400 leading-tight">
      <span className="font-lexend text-[0.91rem] mr-[0.35rem]">¿Aún no tienes una cuenta?</span>

      <Link
        href={REGISTER_PATH}
        className="font-semibold text-main-700 dark:!text-main-200 hover:underline"
      >
        Crear cuenta
      </Link>
    </p>
  )
}
