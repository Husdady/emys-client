// Interfaces
import { OnlyChildrenProp } from '@config/global-interfaces'

export default function ConfirmationContent({ children }: OnlyChildrenProp) {
  return (
    <span className="text-gray-600 dark:text-gray-300 pt-[0.4rem] text-[0.9rem] sm:text-base leading-normal font-poppins sm:px-5 block">
      {children}
    </span>
  )
}
