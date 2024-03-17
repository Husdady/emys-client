// Component
import Mask from '@components/Mask'
import Button from '@components/Button'
import Options from '@components/Select/Options'
import EmptyOptions from '@components/EmptyOptions'
import VirtualizedOptions from '@components/Select/VirtualizedOptions'

// Hooks
import useOptionSelected from './useOptionSelected'

// Interfaces
import { OptionSelectedProps } from '../interfaces'

// Utils
import classnames from '@utils/classnames'
import isEmptyArray from '@utils/isEmptyArray'

// Constants
import { DEFAULT_ENABLE_VIRTUALIZATION } from '../constants'

export default function OptionSelected({
  icon,
  style,
  hasError,
  className,
  emptyText,
  enableVirtualization = DEFAULT_ENABLE_VIRTUALIZATION,
  ...props
}: OptionSelectedProps) {
  const {
    ref,
    label,
    hideOptions,
    optionsProps,
    triggerOptions,
    isTabletScreen,
    isShowingOptions
  } = useOptionSelected(props)

  return (
    <div ref={ref} role="button" className="option-selected relative">
      <Button
        icon={icon}
        title={label}
        style={style}
        disabled={props.disabled}
        onClick={triggerOptions}
        className={classnames([
          className,
          hasError === true ? 'has-error' : null,
          !isTabletScreen &&
          isShowingOptions &&
          props.canSearchOptions &&
          !isEmptyArray(props.options)
            ? 'opacity-0'
            : null,
          'border border-gray-400/50 rounded outline outline-1 outline-offset-0 outline-gray-400/50 dark:outline-gray-400/70 dark:border-gray-400/70'
        ])}
      />

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
    </div>
  )
}
