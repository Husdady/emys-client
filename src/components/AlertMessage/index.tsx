// Librarys
import { memo } from 'react'

// Components
import AlertCircle from '@assets/icons/alert-circle'

// Interfaces
import { OnlyChildrenProp } from '@config/global-interfaces'

function AlertMessage({ children }: OnlyChildrenProp) {
  return (
    <article className="flex items-start note leading-tight font-lexend text-yellow-700 block text-[0.8rem] dark:text-yellow-200 bg-yellow-200 py-1.5 px-2.5 rounded dark:bg-yellow-700 gap-x-2 sm:gap-x-1.5">
      <AlertCircle size="smaller" className="stroke-3 mt-0.5" />
      <span className="message">{children}</span>
    </article>
  )
}

export default memo(AlertMessage, (prevProps, nextProps) => {
  return prevProps.children === nextProps.children
})
