// Librarys
import { memo } from 'react'

// Interfaces
import { OnlyChildrenProp } from '@config/global-interfaces'

function PageLayout({ children }: OnlyChildrenProp) {
  return (
    <section className="main-section bg-gray-100 dark:bg-[#2f3d53] pt-[75px] sm:pt-[6.5rem]">{children}</section>
  )
}

export default memo(PageLayout)
