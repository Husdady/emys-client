// Interfaces
import { OnlyChildrenProp } from '@config/interfaces'

export default function MainButtonsContainer({ children }: OnlyChildrenProp) {
  return (
    <div className="main-buttons-wrapper my-3 sm:mt-0 sm:mb-[1.5rem] flex items-center lg:justify-end gap-x-2.5 sm:gap-x-3.5 gap-y-3 flex-wrap sm:flex-nowrap max-w-[1130px] 2xl:max-w-[1700px] mx-4 sm:mx-[2rem] xl:mx-auto">
      {children}
    </div>
  )
}
