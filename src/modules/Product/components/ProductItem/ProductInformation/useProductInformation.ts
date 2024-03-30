// Librarys
import { useRef, useState, useCallback } from 'react'

// Hooks
import useAuth from '@modules/Auth/states/auth/useAuth'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'
import { Message } from '@modules/Products/components/Product/ContactSeller/interfaces'

// Constants
import { PUBLIC_URL } from '@config/envs'

/**
 * Hook for implements the logic of the ProductInformation component
 */
export default function useProductInformation({ isInStock }: Product) {
  const { user } = useAuth()
  const [units, setUnits] = useState(isInStock ? 1 : 0)
  const innerInformationRef = useRef<HTMLDivElement | null>(null)

  // Callback for set a message for contacts the Seller
  const setDefaultContactSellerMessage = useCallback(
    (message: Message) => {
      const { seller, productName } = message

      // Without session
      if (!user) {
        return `Hola ${
          seller.fullname
        }, he visto el producto ${productName} en ${PUBLIC_URL}. Me interesa adquirir ${units} unidad${
          units > 1 ? 'es' : ''
        }, espero su pronta respuesta. Muchas gracias.`
      }

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
    innerInformationRef: innerInformationRef,
    setDefaultContactSellerMessage: setDefaultContactSellerMessage
  }
}
