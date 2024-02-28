// Librarys
import { memo } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

// Utils
import classnames from '@utils/classnames'
import { PRODUCTS_PATH, PRODUCT_PATH } from '@root/src/assets/data/paths'

// Dynamic Components
const MainNavigation = dynamic(() => import('./MainNavigation'))

function Header() {
  const router = useRouter()
  console.log({ router: router.pathname })
  return (
    <header
      className={classnames([
        'main-header',
        router.pathname !== PRODUCT_PATH ? 'relative z-[99999]' : null
      ])}
    >
      <div className="main-inner-header overflow-hidden">
        <MainNavigation />
      </div>
    </header>
  )
}

export default memo(Header)
