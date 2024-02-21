// Librarys
import { showFloatWarningMessage } from '@libs/antd/message'

// Hooks
import { useCallback, useMemo } from 'react'

// Interfaces
import { ContactSellerProps } from './interfaces'

// Utils
import isString from '@utils/isString'
import isObject from '@utils/isObject'
import isUndefined from '@utils/isUndefined'
import isEmptyObject from '@utils/isEmptyObject'
import isEmptyString from '@utils/isEmptyString'
import isFunction from '@root/src/utils/isFunction'

export const ANONYMUS_SELLER = 'Este vendedor es anónimo, por lo que se desconoce su Whatsapp'

/**
 * Hook for implements the logic of the ContactSeller component
 * @param {Pick<Product, 'mainSeller'>} params  Receive a 'mainSeller'
 */
export default function useContactSeller({
  name,
  isInStock,
  mainSeller,
  defaultMessage
}: ContactSellerProps) {
  // Define the title popup of the Contact button
  const titlePopup = useMemo(() => {
    if (!mainSeller && !isInStock) return 'Este vendedor no está disponible'
    if (!mainSeller) return 'Contactar vendedor'

    if (isInStock) {
      return `Contactar a ${mainSeller.fullname}`
    }

    return `Actualmente ${mainSeller.fullname} no está disponible`
  }, [isInStock])

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

    let message = `Hola ${mainSeller.fullname}. He visto el producto ${name} y me interesa saber más de este producto`

    // Replace Whatsapp message for received message by props
    if (isString(defaultMessage) && !isEmptyString(defaultMessage)) {
      message = defaultMessage
    } else if (isFunction(defaultMessage)) {
      message = defaultMessage({ seller: mainSeller, productName: name })
    }

    window.open(
      `https://api.whatsapp.com/send?phone=+51${mainSeller.phone}&text=${message}`,
      '_blank'
    )
  }, [mainSeller, defaultMessage])

  return {
    titlePopup: titlePopup,
    openWhatsappAPI: openWhatsappAPI
  }
}
