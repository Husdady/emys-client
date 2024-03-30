// Interfaces
import { FallbackProps } from './interfaces'

// Utils
import createItems from './createItems'
import classnames from '@utils/classnames'

export default function Fallback({ config, classLabel, showLabel = true }: FallbackProps) {
  return (
    <div className="group-radio-button fallback-item overflow-hidden">
      {showLabel && (
        <div
          className={classnames([
            classLabel,
            'fallback-text-label min-h-[20px] sm:min-h-[18px] mb-[1.15rem] bg-gray-300/60 rounded animation-pulse dark:!bg-gray-700'
          ])}
        ></div>
      )}

      <div className="flex flex-col gap-y-3 mt-3">
        <ul className="px-2 pb-1 flex flex-wrap gap-4">
          {createItems({ config: config }).map((item) => (
            <li
              key={item.id}
              className={classnames(['fallback-list-item flex gap-2', item.containerClassName])}
            >
              <span className="fallback-input w-[18px] h-[18px] bg-gray-300/60 rounded-full animation-pulse dark:!bg-gray-700"></span>

              <span
                className={classnames([
                  item.className,
                  'fallback-label w-36 h-[16px] bg-gray-300/60 rounded animation-pulse dark:!bg-gray-700'
                ])}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
