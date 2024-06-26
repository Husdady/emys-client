// Components
import Button from '@components/Button'
import BrandWhatsapp from '@components/Icons/BrandWhatsapp'

// Hooks
import useContactSeller from './useContactSeller'

// Interfaces
import { ContactSellerProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

export default function ContactSeller({
  name,
  isInStock,
  mainSeller,
  defaultMessage
}: ContactSellerProps) {
  const { titlePopup, openWhatsappAPI } = useContactSeller({
    name: name,
    isInStock: isInStock,
    mainSeller: mainSeller,
    defaultMessage: defaultMessage
  })

  return (
    <Button
      disabled={!isInStock}
      titlePopup={titlePopup}
      onClick={openWhatsappAPI}
      title="Contactar vendedor"
      icon={<BrandWhatsapp size="sm" />}
      className={classnames([
        !isInStock
          ? 'text-gray-500 bg-gray-300 opacity-100 line-through dark:bg-gray-400 dark:text-gray-200'
          : 'text-white bg-lime-500 hover:bg-green-600 dark:bg-lime-400 dark:text-lime-900 dark:font-semibold dark:hover:bg-lime-300',
        'btn-contact-seller mt-3.5 flex-nowrap rounded-xl !px-2 !py-[0.6rem] whitespace-nowrap !gap-x-1.5 w-full'
      ])}
    />
  )
}
