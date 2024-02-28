// Interfaces
import { TableProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import { LIST_TYPE } from '@modules/Products/api/constants'

export default function Table({ items }: TableProps) {
  return (
    <div className="product-table border border-gray-300 rounded dark:border-gray-500 break-words">
      <ul className="product-field-list">
        {items.map((item, i) => (
          <li
            key={item.fieldId}
            className={classnames([
              'product-field-item flex',
              i < items.length - 1 ? 'border-b border-gray-300 dark:border-gray-500' : null
            ])}
          >
            <span
              className={classnames([
                i % 2 === 0 ? 'bg-gray-100/40 dark:bg-gray-700' : null,
                'field-name font-poppins font-semibold py-3 px-3.5 w-[50%] text-gray-500 dark:text-gray-300 leading-snug'
              ])}
            >
              {item.fieldName}
            </span>

            <div
              className={classnames([
                i % 2 === 0 ? 'bg-gray-100/40 dark:bg-gray-700' : null,
                'py-3 px-3.5 field-wrapper w-[50%] border-l border-gray-300 dark:border-gray-500'
              ])}
            >
              {item.type !== LIST_TYPE && (
                <span className="field-value font-poppins leading-snug">{item.fieldValue}</span>
              )}

              {item.type === LIST_TYPE && Array.isArray(item.fieldValue) && (
                <ul className="field-value-list list-disc pl-4 flex flex-col gap-y-1">
                  {item.fieldValue?.map((el, i) => (
                    <li key={i} className="field-value-item font-poppins leading-snug">
                      {el}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
