// Interfaces
import { Seller } from '@modules/Sellers/api/interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import { tagProps } from './constants'

export default function SellerStatus({ status }: Pick<Seller, 'status'>) {
  const tag = tagProps[status as keyof typeof tagProps]

  return (
    <span
      className={classnames([
        tag.className,
        'w-full font-semibold rounded-full p-2 md:py-1 dark:text-white text-center flex items-center justify-center dark:font-normal font-lexend'
      ])}
    >
      {tag.title}
    </span>
  )
}
