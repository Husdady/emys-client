// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Components
import LongArrowLeft from '@assets/icons/long-arrow-left'
import LongArrowRight from '@assets/icons/long-arrow-right'

// Dynamic Components
const Button = dynamic(() => import('@components/Button'))

function Header() {
  return (
    <div className="latest-added-products-header flex items-center justify-between">
      <h5 className="text-3xl font-lexend">Últimos productos agregados</h5>

      <div className="flex items-center gap-x-2">
        <Button
          title=""
          icon={<LongArrowLeft size="lg" />}
          className="py-2 rounded-lg scale dark:bg-gray-600 dark:text-gray-300"
        />
        
        <Button
          title=""
          icon={<LongArrowRight size="lg" />}
          className="py-2 rounded-lg scale dark:bg-gray-600 dark:text-gray-300"
        />
      </div>
    </div>
  )
}

export default memo(Header)
