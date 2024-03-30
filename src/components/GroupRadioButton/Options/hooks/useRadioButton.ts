// Librarys
import { useId, useMemo } from 'react'

// Interfaces
import { RadioButtonProps } from '@components/GroupRadioButton/Options/interfaces'

// Utils
import classnames from '@utils/classnames'
import isUndefined from '@utils/isUndefined'

// Constants
import { DEFAULT_COLOR, DEFAULT_DISABLED } from '@components/GroupRadioButton/Options/constants'

/**
 * Hook that implements the logic of the Radio button component
 * @param {Partial<RadioButtonProps>} props Radio button props
 */
export default function useRadioButton({
  color = DEFAULT_COLOR,
  disabled = DEFAULT_DISABLED,
  id,
  style,
  className,
  customContainer
}: Partial<RadioButtonProps>) {
  const radioButtonId = useId()

  const radioButton = useMemo(
    () => ({
      // Component id
      id: isUndefined(id) ? radioButtonId : id,

      // Component className
      className: classnames([
        'radio-button relative hover:cursor-default',
        customContainer?.className,
        disabled ? 'disabled' : null
      ]),

      // Input className
      input: 'hidden',

      // Component title
      label: {
        style: style,
        className: classnames([
          color,
          className,
          !disabled
            ? 'hover:cursor-pointer font-semibold text-gray-700 dark:text-gray-200 dark:font-normal'
            : 'text-gray-400 hover:cursor-not-allowed pointer-events-none',
          'relative inline-block select-none hover:cursor-pointer'
        ])
      }
    }),
    []
  )

  return radioButton
}
