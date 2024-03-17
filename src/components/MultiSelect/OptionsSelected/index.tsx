// Librarys
import React from 'react'

// Component
import Mask from '@components/Mask'
import Button from '@components/Button'
import EmptyOptions from '@components/EmptyOptions'
import ChevronDown from '@components/Icons/ChevronDown'
import Label from '@components/MultiSelect/Badge'
import Options from '@components/MultiSelect/Options'
import VirtualizedOptions from '@components/MultiSelect/VirtualizedOptions'

// Hooks
import useOptionsSelected from './useOptionsSelected'

// Interfaces
import { OptionsSelectedProps } from '../interfaces'

// Utils
import classnames from '@utils/classnames'
import isEmptyArray from '@utils/isEmptyArray'

// Constants
import { DEFAULT_ENABLE_VIRTUALIZATION } from '../constants'

const OptionsSelected: React.FC<OptionsSelectedProps> = ({
  style,
  hasError,
  className,
  emptyText,
  enableVirtualization = DEFAULT_ENABLE_VIRTUALIZATION,
  ...props
}: OptionsSelectedProps) => {
  const { values, triggerOptions, hideOptions, optionsProps, isTabletScreen, isShowingOptions } =
    useOptionsSelected(props)

  return (
    <div role="button" className="options-selected">
      {isShowingOptions && <Mask onHide={hideOptions} />}

      {isShowingOptions && !enableVirtualization && !isEmptyArray(props.options) && (
        <Options {...optionsProps} emptyText={emptyText} />
      )}

      {isShowingOptions && enableVirtualization && !isEmptyArray(props.options) && (
        <VirtualizedOptions {...optionsProps} emptyText={emptyText} />
      )}

      {isShowingOptions && isEmptyArray(props.options) && (
        <section style={style} className="wrapper-options overflow-y-auto">
          <EmptyOptions text={emptyText} />
        </section>
      )}

      <Button
        style={style}
        onClick={triggerOptions}
        disabled={props.disabled}
        icon={<ChevronDown />}
        className={classnames([
          className,
          hasError === true ? 'has-error' : null,
          !isTabletScreen && isShowingOptions && props.canSearchOptions ? 'opacity-0' : null,
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
    </div>
  )
}

export default OptionsSelected
