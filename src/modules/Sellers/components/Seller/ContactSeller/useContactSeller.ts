// Hooks
import useAuth from '@hooks/useAuth'
import { useMemo, useCallback } from 'react'

// Interfaces
import { Seller } from '@modules/Sellers/api/interfaces'

// Constants
import { AVAILABLE } from '@modules/Sellers/components/Seller/constants'

export const ANONYMUS_SELLER = 'Este vendedor es anónimo'

/**
 * Hook for implements the logic of the ContactSeller component
 * @param {Pick<Product, 'mainSeller'>} params  Receive a 'mainSeller'
 */
export default function useContactSeller({
  phone,
  status,
  fullname
}: Pick<Seller, 'phone' | 'status' | 'fullname'>) {
  const { user } = useAuth()

  // Check if the Seller is Available
  const isAvailableSeller = useMemo(() => status === AVAILABLE, [status])

  // Callback for open the Whatsapp API
  const openWhatsappAPI = useCallback(() => {
    let message = ''

    if (user === null) {
      message = `Hola ${fullname}, te contacto desde ${window.location.origin}, me interesa los productos que vendes. ¿Puedes brindarme más información?`
    } else {
      message = `Hola ${fullname}. Soy ${user.fullname}, te contacto desde ${window.location.origin}, me interesa los productos que vendes. ¿Puedes brindarme más información?`
    }

    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`, '_blank')
  }, [user, phone, fullname])

  return {
    openWhatsappAPI: openWhatsappAPI,
    isAvailableSeller: isAvailableSeller
  }
}
