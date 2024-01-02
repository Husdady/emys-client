// Components
import Button from '@components/Button'
import BrandWhatsapp from '@assets/icons/brand-whatsapp'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Utils
import classnames from '@utils/classnames'

export default function ContactSeller({ isInStock }: Pick<Product, 'isInStock'>) {
  return (
    <Button
      disabled={!isInStock}
      title="Contactar vendedor"
      icon={<BrandWhatsapp size="sm" />}
      className={classnames([
        !isInStock
          ? 'text-gray-500 bg-gray-300 opacity-100 line-through dark:bg-gray-500 dark:text-gray-300'
          : 'text-white bg-lime-500 enabled:hover:bg-green-600 dark:bg-lime-500 dark:text-lime-900 dark:font-semibold dark:enabled:hover:bg-lime-400',
        'btn-contact-seller mt-3.5 flex-nowrap rounded-xl !p-2 whitespace-nowrap !gap-x-1 w-full'
      ])}
    />
  )
}
