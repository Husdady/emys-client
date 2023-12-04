// Component
import Options from './Options'
import Mask from '@components/Mask'
import Button from '@components/Button'
import EmptyOptions from '@components/EmptyOptions'
import VirtualizedOptions from './VirtualizedOptions'

// Hooks
import useSelect from './hooks/useSelect'

// Interfaces
import { OptionSelectedProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import { DEFAULT_ENABLE_VIRTUALIZATION } from './constants'

export default function OptionSelected({
  icon,
  style,
  className,
  emptyText,
  enableVirtualization = DEFAULT_ENABLE_VIRTUALIZATION,
  ...props
}: OptionSelectedProps) {
  const { ref, label, hideOptions, optionsProps, triggerOptions, isShowingOptions } =
    useSelect(props)

  return (
    <>
      <div ref={ref} role="button" className="option-selected">
        <Button
          icon={icon}
          title={label}
          style={style}
          disabled={props.disabled}
          onClick={triggerOptions}
          className={classnames([
            className,
            'border border-gray-400/50 rounded outline outline-1 outline-offset-0 outline-gray-400/50 dark:outline-gray-400/70 dark:border-gray-400/70'
          ])}
        />
      </div>

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
    </>
  )
}
