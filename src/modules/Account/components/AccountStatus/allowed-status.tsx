// Components
import Ban from '@assets/icons/ban'
import ShieldCheck from '@assets/icons/shield-check'
import ExclamationCircle from '@assets/icons/exclamation-circle'

// Interfaces
import { TagProps } from '@components/Tag/interfaces'

// Constants
export const BLOCKED = 'blocked'
export const VERIFIED = 'verified'
export const UNVERIFIED = 'unverified'

const statusAllowed: Record<string, TagProps> = {
  // Verified account
  [VERIFIED]: {
    title: 'Cuenta verificada',
    titlePopup: 'Tu cuenta ha sido verificada',
    icon: <ShieldCheck className="sm" />,
    className: '!bg-emerald-500 dark:!bg-green-600 text-white float-right !rounded-full !px-4'
  },

  // Unverified account
  [UNVERIFIED]: {
    title: 'Cuenta no verificada',
    titlePopup: 'Verifica tu cuenta',
    icon: <ExclamationCircle className="sm" />,
    className:
      'bg-yellow-500 dark:bg-yellow-700 text-white dark:!text-yellow-300 float-right !rounded-full !px-4'
  },

  // Blocked account
  [BLOCKED]: {
    title: 'Cuenta bloqueada',
    titlePopup: 'Tu cuenta ha sido bloqueada',
    icon: <Ban className="sm" />,
    className:
      'bg-red-500 dark:bg-red-700 text-red-100 dark:!text-red-200 float-right !rounded-full !px-4'
  }
}

export default statusAllowed
