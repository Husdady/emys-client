// Librarys
import { showFloatWarningMessage } from '@libs/antd/message'

// Hooks
import { useCallback } from 'react'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Utils
import isObject from '@utils/isObject'
import isEmptyObject from '@utils/isEmptyObject'
import isUndefined from '@root/src/utils/isUndefined'

export const ANONYMUS_SELLER = 'Este vendedor es anónimo'

/**
 * Hook for implements the logic of the ContactSeller component
 * @param {Pick<Product, 'mainSeller'>} params  Receive a 'mainSeller'
 */
export default function useContactSeller({
  name,
  mainSeller
}: Pick<Product, 'name' | 'mainSeller'>) {
  // Callback for open the Whatsapp API
  const openWhatsappAPI = useCallback(() => {
    if (
      mainSeller === null ||
      !isObject(mainSeller) ||
      isUndefined(mainSeller) ||
      isEmptyObject(mainSeller as any)
    ) {
      return showFloatWarningMessage(ANONYMUS_SELLER)
    }

    const message = `Hola ${mainSeller?.fullname}. He visto el producto ${name} y me interesa saber más de este producto`

    window.open(
      `https://api.whatsapp.com/send?phone=+51${mainSeller.phone}&text=${message}`,
      '_blank'
    )
  }, [mainSeller])

  return {
    openWhatsappAPI: openWhatsappAPI
  }
}
