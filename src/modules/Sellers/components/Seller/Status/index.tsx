// Interfaces
import { Seller } from '@modules/Sellers/api/interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import { tagProps } from './constants'

export default function SellerStatus({ status }: Pick<Seller, 'status'>) {
  const props = tagProps[status as keyof typeof tagProps]

  return (
    <span
      className={classnames([
        props.className,
        'font-semibold rounded-full px-2 py-2 md:py-[0.2rem] dark:text-white text-center flex items-center justify-center dark:font-normal font-lexend'
      ])}
    >
      {props.title}
    </span>
  )
}
