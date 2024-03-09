// Components
import Button from '@components/Button'
import BrandWhatsapp from '@components/Icons/BrandWhatsapp'

// Hooks
import useContactSeller from './useContactSeller'

// Interfaces
import { Seller } from '@modules/Sellers/api/interfaces'

// Utils
import classnames from '@utils/classnames'

export default function ContactSeller({
  phone,
  status,
  fullname
}: Pick<Seller, 'phone' | 'status' | 'fullname'>) {
  const { openWhatsappAPI, isAvailableSeller } = useContactSeller({
    phone: phone,
    status: status,
    fullname: fullname
  })

  return (
    <Button
      title="Contactar vendedor"
      titlePopup={`Contactar a ${fullname}`}
      onClick={openWhatsappAPI}
      disabled={!isAvailableSeller}
      icon={<BrandWhatsapp size="md" />}
      className={classnames([
        !isAvailableSeller
          ? 'text-gray-500 bg-gray-300 opacity-100 line-through dark:bg-gray-400 dark:text-gray-200'
          : 'text-white bg-lime-500 hover:bg-green-600 dark:bg-lime-400 dark:text-lime-900 dark:font-semibold dark:hover:bg-lime-300',
        'btn-contact-seller mt-3.5 flex-nowrap rounded-full !px-2 !py-[0.8rem] whitespace-nowrap !gap-x-1.5 w-full text-[1rem]'
      ])}
    />
  )
}
