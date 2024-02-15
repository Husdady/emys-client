// Hooks
import useStatus from './useStatus'

// Interfaces
import { Seller } from '@modules/Sellers/api/interfaces'

// Utils
import classnames from '@utils/classnames'

export default function SellerStatus(props: Pick<Seller, 'status' | 'socialNetworks'>) {
  const { tag, hasSocialNetworksAccounts } = useStatus(props)

  return (
    <span
      className={classnames([
        tag.className,
        !hasSocialNetworksAccounts ? 'mt-2 mb-1.5' : null,
        'w-full font-semibold rounded-full p-2 md:py-1 dark:text-white text-center flex items-center justify-center dark:font-normal font-lexend'
      ])}
    >
      {tag.title}
    </span>
  )
}
