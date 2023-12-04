// Interfaces
import { AsideProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

export default function Aside({
  title,
  titleClassName,
  description,
  children,
  className
}: AsideProps) {
  return (
    <div
      className={classnames([
        className,
        'aside flex flex-wrap lg:flex-nowrap gap-x-12 justify-between w-full'
      ])}
    >
      <div className="inner w-full lg:w-6/12">
        <h3
          className={classnames([
            titleClassName,
            'dark:text-main-200 text-[1.15rem] font-semibold dark:font-normal leading-tight mb-1.5 tracking-wide dark:font-lexend dark:tracking-[initial]'
          ])}
        >
          {title}
        </h3>

        <p className="text-gray-700 dark:text-gray-400 font-medium text-[0.9rem] leading-snug font-lexend">
          {description}
        </p>
      </div>

      <div className="w-full mt-6 lg:mt-0 lg:w-6/12">{children}</div>
    </div>
  )
}
