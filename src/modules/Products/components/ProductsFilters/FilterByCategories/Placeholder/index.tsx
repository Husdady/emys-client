// Hooks
import usePlaceholder from './usePlaceholder'

// Utils
import createList from '@utils/createList'
import createAleatoryWidth from './createAleatoryWidth'

export default function Placeholder() {
  const { items, totalItems } = usePlaceholder()

  return (
    <div className="filter-by-categories placeholder-item mb-1">
      <div className="w-48 placeholder-text-label min-h-[20px] sm:min-h-[18px] mb-2 bg-gray-300/60 rounded animation-pulse dark:!bg-gray-700"></div>

      <ul className="product-categories flex flex-wrap gap-1.5 mt-2.5">
        {createList(totalItems).map((i) => (
          <li
            key={String(i)}
            style={{ width: items?.[i - 1]?.width ?? createAleatoryWidth() }}
            className={`product-category-item min-h-[30.33px] sm:min-h-[29.33px]`}
          >
            <span className="block w-full h-full product-category bg-gray-100 border border-gray-300 dark:border-gray-500 dark:bg-gray-700 rounded"></span>
          </li>
        ))}
      </ul>
    </div>
  )
}
