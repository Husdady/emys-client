// Librarys
import dynamic from 'next/dynamic'

// Hooks
import useLatestRegisteredSellers from './useLatestRegisteredSellers'

// Utils
import classnames from '@utils/classnames'

// Constants
import { LATEST_REGISTERED_SELLERS_ID } from './constants'

// Dynamic Components
const Error = dynamic(() => import('./Error'))
const Header = dynamic(() => import('./Header'))
const Sellers = dynamic(() => import('./Sellers'))
const EmptyLatestSellers = dynamic(() => import('./EmptyLatestSellers'))

export default function LatestRegisteredSellers() {
  const { sellers, isError, isLoading, hasEmptySellers } = useLatestRegisteredSellers()

  return (
    <section
      id={LATEST_REGISTERED_SELLERS_ID}
      className={classnames([
        isLoading ? 'lg:!pb-[1.25rem]' : null,
        isError || isLoading ? 'pt-[2.2rem]' : null,
        isError || (!isLoading && hasEmptySellers) ? 'white-screen' : 'pt-[4rem]',
        !isError && hasEmptySellers ? 'pb-4 lg:pb-[4rem]' : 'pb-[1.65rem] sm:pb-4',
        'latest-registered-sellers mx-auto px-4 xl:px-0'
      ])}
    >
      {!isError && <Header />}

      {isError && <Error />}
      {!isError && !isLoading && hasEmptySellers && <EmptyLatestSellers />}

      {(isLoading || (!isError && !hasEmptySellers)) && (
        <Sellers sellers={sellers} isLoading={isLoading} />
      )}
    </section>
  )
}
