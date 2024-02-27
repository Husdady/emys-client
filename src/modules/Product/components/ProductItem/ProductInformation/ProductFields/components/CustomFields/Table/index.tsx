// Hooks
import useTable from './useTable'

// Types
import type { CustomFieldsProps } from '../types'

// Utils
import classnames from '@utils/classnames'

// Constants
import { LIST_TYPE } from '@modules/Products/api/constants'

export default function CustomProductFieldsTable(props: CustomFieldsProps) {
  const { fields } = useTable(props)

  return (
    <div className="custom-product-fields-table border border-gray-300 rounded dark:border-gray-500">
      <ul className="custom-product-field-list">
        {fields.map((field, i) => (
          <li
            key={field.fieldId}
            className={classnames([
              'custom-product-field-item flex items-center',
              i < fields.length - 1 ? 'border-b border-gray-300 dark:border-gray-500' : null
            ])}
          >
            <span
              className={classnames([
                i % 2 === 0 ? 'bg-gray-100/40 dark:bg-gray-700' : null,
                'field-name font-poppins font-semibold py-3 px-3.5 w-[50%] text-gray-500 dark:text-gray-300'
              ])}
            >
              {field.fieldName}
            </span>

            <div
              className={classnames([
                i % 2 === 0 ? 'bg-gray-100/40 dark:bg-gray-700' : null,
                'py-3 px-3.5 inner-wrapper w-[50%] border-l border-gray-300 dark:border-gray-500'
              ])}
            >
              {field.type !== LIST_TYPE && (
                <span className="field-value font-poppins">{field.fieldValue}</span>
              )}

              {field.type === LIST_TYPE && Array.isArray(field.fieldValue) && (
                <ul className="field-value-list list-disc pl-4">
                  {field.fieldValue?.map((el, i) => (
                    <li key={i} className="field-value-item font-poppins">
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
