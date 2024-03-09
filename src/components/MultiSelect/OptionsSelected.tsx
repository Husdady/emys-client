// Librarys
import React from 'react'

// Component
import Label from './Badge'
import Options from './Options'
import Mask from '@components/Mask'
import Button from '@components/Button'
import EmptyOptions from '@components/EmptyOptions'
import VirtualizedOptions from './VirtualizedOptions'
import ChevronDown from '@components/Icons/ChevronDown'

// Hooks
import useMultiSelect from './hooks/useMultiSelect'

// Interfaces
import { OptionsSelectedProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import { DEFAULT_ENABLE_VIRTUALIZATION } from './constants'

const OptionsSelected: React.FC<OptionsSelectedProps> = ({
  style,
  hasError,
  className,
  emptyText,
  enableVirtualization = DEFAULT_ENABLE_VIRTUALIZATION,
  ...props
}: OptionsSelectedProps) => {
  const { values, triggerOptions, hideOptions, optionsProps, isShowingOptions } =
    useMultiSelect(props)

  return (
    <div role="button" className="options-selected">
      {isShowingOptions && <Mask onHide={hideOptions} />}

      {isShowingOptions && !enableVirtualization && props.options.length > 0 && (
        <Options {...optionsProps} emptyText={emptyText} />
      )}

      {isShowingOptions && enableVirtualization && props.options.length > 0 && (
        <VirtualizedOptions {...optionsProps} emptyText={emptyText} />
      )}

      {isShowingOptions && props.options.length === 0 && (
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
