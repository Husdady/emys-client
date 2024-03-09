// Interfaces
import { OnlyChildrenProp, OnlyClassNameProp } from '@config/globalInterfaces'

// Interfaces
import classnames from '@utils/classnames'

export default function BoxContainer({
  children,
  className
}: OnlyChildrenProp & OnlyClassNameProp) {
  return (
    <section
      className={classnames([
        className,
        'membership flex flex-col gap-y-3 mb-4 sm:mb-[3rem] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1000px] 2xl:max-w-[1200px] px-2 sm:px-[2rem] md:[3rem] lg:px-0 mx-auto'
      ])}
    >
      {children}
    </section>
  )
}
