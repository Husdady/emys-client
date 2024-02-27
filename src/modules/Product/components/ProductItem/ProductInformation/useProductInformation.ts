// Librarys
import { useState, useCallback } from 'react'

// Hooks
import useAuth from '@hooks/useAuth'

// Interfaces
import { Message } from '@modules/Products/components/Product/ContactSeller/interfaces'

// Constants
import { PUBLIC_URL } from '@config/envs'

/**
 * Hook for implements the logic of the ProductInformation component
 */
export default function useProductInformation() {
  const { user } = useAuth()
  const [units, setUnits] = useState(1)

  // Callback for set a message for contacts the Seller
  const setDefaultContactSellerMessage = useCallback(
    (message: Message) => {
      if (!user) return ''

      const { seller, productName } = message

      return `Hola ${seller.fullname}. Soy ${
        user.fullname
      } y he visto el producto ${productName} en ${PUBLIC_URL}. Me interesa adquirir ${units} unidad${
        units > 1 ? 'es' : ''
      }, espero su pronta respuesta. Muchas gracias.`
    },
    [user, units]
  )

  return {
    units: units,
    setUnits: setUnits,
    setDefaultContactSellerMessage: setDefaultContactSellerMessage
  }
}
