// Interfaces
import { FiltersContainerProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

export default function FiltersContainer({
  buttons,
  className,
  inputSearch
}: FiltersContainerProps) {
  return (
    <section
      className={classnames([
        className,
        'filters-container flex items-center gap-2.5 px-6 mt-4 mb-6 mx-auto max-w-[1130px] 2xl:max-w-[1700px]'
      ])}
    >
      {inputSearch}

      <div className="wrapper-buttons flex items-center gap-x-1.5 gap-y-2.5">{buttons}</div>
    </section>
  )
}
