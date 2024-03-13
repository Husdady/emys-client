// Librarys
import dynamic from 'next/dynamic'

// Hooks
import useLatestRegisteredSellers from './useLatestRegisteredSellers'

// Constants
import { LATEST_REGISTERED_SELLERS_ID } from './constants'

// Dynamic Components
const Empty = dynamic(() => import('./Empty'))
const Error = dynamic(() => import('./Error'))
const Header = dynamic(() => import('./Header'))
const Sellers = dynamic(() => import('./Sellers'))

export default function LatestRegisteredSellers() {
  const { sellers, isError, isLoading, hasEmptySellers } = useLatestRegisteredSellers()

  // Show Error view
  if (isError) return <Error />

  // Show Empty view
  if (!isLoading && hasEmptySellers) {
    return <Empty />
  }

  return (
    <section
      id={LATEST_REGISTERED_SELLERS_ID}
      className="latest-registered-sellers mx-auto px-5 xl:px-0 pt-[2.5rem] sm:pt-[3rem]"
    >
      <Header />
      <Sellers sellers={sellers} isLoading={isLoading} />
    </section>
  )
}
