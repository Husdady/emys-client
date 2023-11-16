// Librarys
import { createId } from '@libs/nanoid'

// Hooks
import { useMemo, useState, useCallback } from 'react'

// Types
import type { UseCheckboxParams } from './types'

// Interfaces
import { CheckboxEventParams } from './interfaces'
import { IconProps } from '@components/Icon/interfaces'

// Utils
import isString from '@utils/isString'
import isUndefined from '@utils/isUndefined'
import isEmptyString from '@utils/isEmptyString'

/**
 * Generate the logic of the Checkbox component
 * @param {UseCheckboxParams} props Receive Checkbox component props
 */
export default function useCheckbox({
  id,
  value,
  label,
  checked,
  onCheck,
  onToggle,
  checkColor,
  onUnchecked,
  description
}: UseCheckboxParams) {
  const [isChecked, setChecked] = useState<boolean>(false)

  // Create 'id' of the Component
  const checkboxId = useMemo(() => (isString(id) ? id : createId()), [id])

  // Check if exists a description
  const isExistingDescription = useMemo(
    () => isString(description) && !isEmptyString(description),
    [description]
  )

  // Execute Checkbox params
  const executeCallbacks = useCallback(
    (cbParams: CheckboxEventParams) => {
      !isChecked
        ? onCheck?.(cbParams) // Check callback
        : onUnchecked?.(cbParams) // Uncheck callback

      // Toggle checkbox callback
      onToggle?.(cbParams)
    },
    [isChecked, onCheck, onToggle, onUnchecked]
  )

  // Checkbox 'onChange' event
  const handleOnChange = useCallback(() => {
    // Params to pass in the callbacks
    const params: CheckboxEventParams = {
      id: checkboxId,
      value: value,
      label: label
    }

    // Don't exists prop 'check'
    if (!isUndefined(checked)) {
      return executeCallbacks(params)
    }

    // Update state
    setChecked((isActive) => {
      params.isActive = !isActive
      executeCallbacks(params)
      return !isActive
    })
  }, [isChecked, executeCallbacks])

  // Define the icon props
  const iconProps = useMemo<IconProps>(
    () => ({
      color: checkColor,
      onClick: handleOnChange,
      className: 'absolute select-none'
    }),
    [checkColor, handleOnChange]
  )

  return {
    isChecked: isChecked,
    iconProps: iconProps,
    checkboxId: checkboxId,
    handleOnChange: handleOnChange,
    isExistingDescription: isExistingDescription
  }
}
