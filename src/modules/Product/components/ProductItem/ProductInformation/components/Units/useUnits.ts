// Librarys
import { useMemo, useCallback, ChangeEvent } from 'react'

// Interfaces
import { UnitsProps } from './interfaces'

// Utils
import isEmptyString from '@utils/isEmptyString'

/**
 * Hook for implements the logic of the Units component
 * @param {UnitsProps} params Receive props of the Units component
 */
export default function useUnits({ units, setUnits, isInStock, productUnits = 1 }: UnitsProps) {
  // Define a flag for check if needs disable the decrease button
  const isDisabledDecreaseButton = useMemo(() => !isInStock || units <= 1, [units, isInStock])

  // Define a flag for check if needs disable the increase button
  const isDisabledIncreaseButton = useMemo(
    () => !isInStock || units >= (productUnits ?? 1),
    [units, isInStock, productUnits]
  )

  // Callback for increase the units
  const increaseUnits = useCallback(() => {
    setUnits((u) => u + 1)
  }, [])

  // Callback for decrease the units
  const decreaseUnits = useCallback(() => {
    setUnits((u) => u - 1)
  }, [])

  // Callback for update the units
  const handleChangeUnit = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const newUnits = parseInt(value.replace(/\D/g, ''))
    setUnits(newUnits)
  }, [])

  // Callback for handle the blur event
  const handleBlur = useCallback(() => {
    const currentProductUnits = productUnits ?? 1

    // Set units as the maximun product units
    if (units > currentProductUnits) {
      setUnits(currentProductUnits)
    }

    // Reset units
    if (!units || units <= 0 || isEmptyString(units)) {
      setUnits(1)
    }
  }, [units, productUnits])

  return {
    handleBlur: handleBlur,
    increaseUnits: increaseUnits,
    decreaseUnits: decreaseUnits,
    handleChangeUnit: handleChangeUnit,
    isDisabledIncreaseButton: isDisabledIncreaseButton,
    isDisabledDecreaseButton: isDisabledDecreaseButton
  }
}
