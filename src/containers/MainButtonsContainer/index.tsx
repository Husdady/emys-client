// Interfaces
import { OnlyChildrenProp } from '@config/globalInterfaces'

export default function MainButtonsContainer({ children }: OnlyChildrenProp) {
  return (
    <div className="main-buttons-wrapper my-3 sm:mt-0 sm:mb-[2rem] flex items-center justify-end gap-x-3.5 gap-y-3 flex-wrap sm:flex-nowrap max-w-[1150px] mx-4 sm:mx-[2rem] xl:mx-auto">
      {children}
    </div>
  )
}
