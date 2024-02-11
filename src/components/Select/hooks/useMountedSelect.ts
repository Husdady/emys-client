// Types
import type { Dispatch, SetStateAction } from 'react'

// Hooks
import useMounted from '@hooks/useMounted'

// Utils
import isString from '@utils/isString'

export interface Params {
  value?: string
  selectedValue?: string
  setValue: Dispatch<SetStateAction<string | undefined>>
}

/**
 * Hook for implements the mounted logic of the Select component
 * @param {Params} params Receive a 'value', 'setValue' and 'selectedValue'
 */
export default function useMountedSelect({ value, setValue, selectedValue }: Params) {
  useMounted(() => {
    if (isString(selectedValue) && selectedValue !== value) {
      setValue(selectedValue)
    }
  }, [selectedValue])
}
