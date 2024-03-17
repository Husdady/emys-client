// Librarys
import React from 'react'

// Components
import Check from '@components/Icons/Check'

// Interfaces
import { CheckboxContentProps } from './interfaces'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'
import classnames from '@utils/classnames'

const CheckboxContent: React.FC<CheckboxContentProps> = ({
  value,
  onChange,
  checked,
  iconProps,
  checkboxId,
  disabled,
  description,
  backgroundColor,
  label,
  labelStyle,
  labelClassName,
  inputClassName,
  innerClassName,
  isExistingDescription
}: CheckboxContentProps) => {
  // Define component style
  const style = React.useMemo(() => {
    if (checked !== true) return
    return { backgroundColor: backgroundColor }
  }, [checked])

  return (
    <React.Fragment>
      <div
        className={classnames([
          innerClassName,
          disabled === true ? 'cursor-not-allowed' : null,
          'inner items-start inline-flex justify-center select-none relative'
        ])}
      >
        <div
          className={classnames([
            isExistingDescription ? 'mt-[0.15rem]' : null,
            'input-wrapper flex items-center justify-center'
          ])}
        >
          <input
            type="checkbox"
            value={value}
            style={style}
            id={checkboxId}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            className={inputClassName}
          />

          {checked === true ? <Check {...iconProps} /> : null}
        </div>
      </div>

      <div className="flex flex-col pl-2">
        {!isString(label) && <div>{label}</div>}

        {!isEmptyString(label) && (
          <label htmlFor={checkboxId} style={labelStyle} className={labelClassName}>
            {label}
          </label>
        )}

        {isExistingDescription && (
          <span className="text-[0.85rem] leading-tight mt-[0.15rem] dark:text-gray-300">
            {description}
          </span>
        )}
      </div>
    </React.Fragment>
  )
}

export default React.memo(CheckboxContent)
