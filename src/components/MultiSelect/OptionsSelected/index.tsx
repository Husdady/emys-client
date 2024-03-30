// Librarys
import React from 'react'

// Component
import Mask from '@components/Mask'
import Button from '@components/Button'
import Label from '@components/MultiSelect/Badge'
import EmptyOptions from '@components/EmptyOptions'
import Options from '@components/MultiSelect/Options'
import ChevronDown from '@components/Icons/ChevronDown'
import VirtualizedOptions from '@components/MultiSelect/VirtualizedOptions'

// Hooks
import useOptionsSelected from './useOptionsSelected'

// Interfaces
import { OptionsSelectedProps } from '@components/MultiSelect/interfaces'

// Utils
import classnames from '@utils/classnames'
import isEmptyArray from '@utils/isEmptyArray'

// Constants
import { DEFAULT_ENABLE_VIRTUALIZATION } from '@components/MultiSelect/constants'

export default function OptionsSelected({
  style,
  hasError,
  className,
  emptyText,
  enableVirtualization = DEFAULT_ENABLE_VIRTUALIZATION,
  ...props
}: OptionsSelectedProps) {
  const { values, hideOptions, optionsProps, triggerOptions, hiddenClassName, isShowingOptions } =
    useOptionsSelected(props)

  return (
    <div role="button" className="options-selected relative">
      <Button
        style={style}
        onClick={triggerOptions}
        disabled={props.disabled}
        icon={<ChevronDown />}
        className={classnames([
          className,
          hiddenClassName,
          hasError === true ? 'has-error' : null,
          'border border-gray-400/50 rounded outline outline-1 outline-offset-0 outline-gray-400/50 dark:outline-gray-400/70 dark:border-gray-400/70'
        ])}
        title={
          <Label
            values={values}
            options={props.options}
            noSelectionLabel={props.noSelectionLabel}
          />
        }
      />

      {isShowingOptions && <Mask onHide={hideOptions} />}

      {isShowingOptions && !enableVirtualization && !isEmptyArray(props.options) && (
        <Options {...optionsProps} emptyText={emptyText} />
      )}

      {isShowingOptions && enableVirtualization && !isEmptyArray(props.options) && (
        <VirtualizedOptions {...optionsProps} emptyText={emptyText} />
      )}

      {isShowingOptions && isEmptyArray(props.options) && (
        <EmptyOptions style={style} text={emptyText} />
      )}
    </div>
  )
}
