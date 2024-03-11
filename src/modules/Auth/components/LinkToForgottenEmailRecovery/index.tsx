// Librarys
import dynamic from 'next/dynamic'

// Constants
import { FORGOT_EMAIL_PATH } from '@data/paths'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))

export default function LinkToForgottenEmailRecovery() {
  return (
    <Link
      href={FORGOT_EMAIL_PATH}
      className="forgotten-email-link text-medium font-medium text-gray-700 dark:text-gray-400 block mb-2 sm:mb-1 hover:underline dark:hover:text-pink-300 font-lexend leading-tight"
    >
      ¿Olvidaste tu correo electrónico?
    </Link>
  )
}
