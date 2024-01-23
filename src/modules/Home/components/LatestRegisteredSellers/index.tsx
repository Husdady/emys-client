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
        'latest-registered-sellers mx-auto px-5 xl:px-0',
        !isError && !hasEmptySellers ? 'pt-[3rem]' : null,
        isError || (!isLoading && hasEmptySellers) ? 'white-screen' : null
      ])}
    >
      {isError && <Error />}
      {(isLoading || (!isError && !hasEmptySellers)) && <Header />}
      {!isError && !isLoading && hasEmptySellers && <EmptyLatestSellers />}

      {(isLoading || (!isError && !hasEmptySellers)) && (
        <Sellers sellers={sellers} isLoading={isLoading} />
      )}
    </section>
  )
}
