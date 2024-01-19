// Constants
import { AVAILABLE, UNAVAILABLE } from '@modules/Sellers/components/Seller/constants'

export const tagProps = {
  [AVAILABLE]: {
    title: 'Disponible',
    className: 'available-product text-sky-500 bg-sky-100 dark:bg-sky-500'
  },

  [UNAVAILABLE]: {
    title: 'Agotado',
    className: 'unavailable-product text-red-500 bg-red-100 dark:bg-red-600'
  }
}
