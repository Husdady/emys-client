// Librarys
import dynamic from 'next/dynamic'

// Constants
import { FORGOT_EMAIL_PATH } from '@assets/paths'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))

export default function LinkToForgottenEmailRecovery() {
  return (
    <Link
      href={FORGOT_EMAIL_PATH}
      className="text-medium font-medium text-gray-700 dark:text-gray-400 block pb-1 hover:underline dark:hover:text-main-200 font-lexend leading-tight"
    >
      ¿Olvidaste tu correo electrónico?
    </Link>
  )
}
