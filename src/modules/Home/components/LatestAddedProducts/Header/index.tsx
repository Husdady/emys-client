// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Components
import Eye from '@assets/icons/eye'
import LongArrowLeft from '@assets/icons/long-arrow-left'
import LongArrowRight from '@assets/icons/long-arrow-right'

// Hooks
import useHeader from './useHeader'

// Constants
import { PRODUCTS_PATH } from '@assets/data/paths'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))
const Button = dynamic(() => import('@components/Button'))

function Header() {
  const { showNextProducts, showPreviousProducts } = useHeader()

  return (
    <div className="latest-added-products-header flex flex-wrap items-center justify-between px-3 max-w-[1100px] mx-auto gap-x-[2.5rem] gap-y-4">
      <h5 className="text-3xl font-lexend text-main-500 dark:text-rose-300 break-word">
        Últimos productos agregados
      </h5>

      <div className="flex items-center gap-x-2 inner-wrapper">
        <Link
          href={PRODUCTS_PATH}
          title="Ver todos los productos"
          className="see-all-products-link bg-main-500 dark:bg-rose-300 text-white dark:text-rose-900 py-2 !px-4 rounded-full gap-x-1.5 me-2 hover:bg-rose-500 flex items-center justify-center font-poppins dark:hover:text-white dark:hover:bg-rose-500 dark:font-semibold dark:hover:font-normal"
        >
          <Eye className="sm" />
          <span>Ver todos los productos</span>
        </Link>

        <div className='flex items-center gap-x-1.5 arrows-wrapper'>
          <Button
            title=""
            onClick={showPreviousProducts}
            icon={<LongArrowLeft size="smd" onClick={showPreviousProducts} />}
            className="btn-show-previous-products py-1 !px-3 rounded-full scale text-white bg-main-500 dark:bg-rose-300 dark:text-rose-900 hover:bg-rose-500 dark:hover:text-white dark:hover:bg-rose-500"
          />

          <Button
            title=""
            onClick={showNextProducts}
            icon={<LongArrowRight size="smd" onClick={showNextProducts} />}
            className="btn-show-next-products py-1 !px-3 rounded-full scale text-white bg-main-500 dark:bg-rose-300 dark:text-rose-900 hover:bg-rose-500 dark:hover:text-white dark:hover:bg-rose-500"
          />
        </div>
      </div>
    </div>
  )
}

export default memo(Header)
