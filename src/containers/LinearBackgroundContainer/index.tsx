// Interfaces
import { OnlyChildrenProp, OnlyClassNameProp } from '@config/interfaces'

// Utils
import classnames from '@utils/classnames'

export default function LinearBackgroundContainer({
  children,
  className
}: OnlyChildrenProp & OnlyClassNameProp) {
  return (
    <section
      className={classnames([
        className,
        'linear-background-container transition-ease-out bg-gray-100 dark:bg-[#2f3d53] pt-[75px] sm:pt-[5.5rem] md:pt-[6.5rem]'
      ])}
    >
      {children}
    </section>
  )
}
