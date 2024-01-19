// Constants
import { AVAILABLE, UNAVAILABLE } from '@modules/Sellers/components/Seller/constants'

export const tagProps = {
  [AVAILABLE]: {
    title: 'Disponible',
    className: 'available-seller text-sky-500 bg-sky-100 dark:bg-sky-500'
  },

  [UNAVAILABLE]: {
    title: 'No Disponible',
    className: 'unavailable-seller text-red-500 bg-red-100 dark:bg-red-600'
  }
}
