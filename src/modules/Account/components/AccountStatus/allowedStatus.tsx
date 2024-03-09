// Components
import Ban from '@components/Icons/Ban'
import ShieldCheck from '@components/Icons/DiscountCheckFilled'
import ExclamationCircle from '@components/Icons/ExclamationCircle'

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
    className:
      'bg-lime-200 dark:bg-lime-300 text-lime-900 !font-semibold border-2 outline outline-1 outline-lime-500 border-lime-300 dark:outline-lime-500 dark:border-lime-800',
    icon: <ShieldCheck className="sm" />
  },

  // Unverified account
  [UNVERIFIED]: {
    title: 'Cuenta no verificada',
    titlePopup: 'Verifica tu cuenta',
    icon: <ExclamationCircle className="sm" />,
    className:
      '!bg-yellow-200 dark:!bg-yellow-300 text-yellow-600 border-2 outline outline-1 outline-yellow-400 border-yellow-300 dark:outline-yellow-700 dark:border-yellow-800 !font-semibold dark:text-yellow-800'
  },

  // Blocked account
  [BLOCKED]: {
    title: 'Cuenta bloqueada',
    titlePopup: 'Tu cuenta ha sido bloqueada',
    icon: <Ban className="sm" />,
    className:
      'bg-red-200 dark:bg-red-500 text-red-700 border-2 outline outline-1 outline-red-300 border-red-300 dark:outline-red-400 dark:border-red-800 !font-semibold dark:text-white dark:!font-normal'
  }
}

export default statusAllowed
