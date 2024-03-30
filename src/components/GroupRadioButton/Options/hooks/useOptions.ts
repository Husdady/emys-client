// Librarys
import { useCallback, ChangeEvent } from 'react'

// Types
import type { RadioButtonOptionsProps } from '@components/GroupRadioButton/types'

// Interfaces
import { RadioButtonProps } from '@components/GroupRadioButton/Options/interfaces'

/**
 * Hook that implements the logic of the Options component
 * @param {RadioButtonOptionsProps} props Radio button props
 */
export default function useOptions({ options, onChange }: RadioButtonOptionsProps) {
  // Evento 'onChange' en radio button
  const handleOnChange = useCallback((option: RadioButtonProps, i: number) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.({
        index: i,
        event: event,
        position: i + 1,
        currentOption: option,
        options: options
      })
    }
  }, [])

  return {
    handleOnChange: handleOnChange
  }
}
