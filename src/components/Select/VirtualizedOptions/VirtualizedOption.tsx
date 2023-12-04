// Librarys
import { memo, isValidElement, useRef, useCallback } from 'react'

// Hooks
import useMounted from '@hooks/useMounted'

// Interfaces
import { VirtualizedOptionProps } from './interfaces'
import { Option as OptionItem } from '@components/Select/interfaces'

function VirtualizedOption({
  value,
  label,
  index,
  markup,
  onChange,
  windowWidth,
  setOptionSize
}: VirtualizedOptionProps) {
  const ref = useRef<HTMLButtonElement | null>(null)

  // Callback 'onChange' when an option is selected
  const handleOnChange = useCallback(
    (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      // Define option
      const option: OptionItem = {
        value: value,
        label: label
      }

      if (isValidElement(markup)) {
        option.markup = markup
      }

      // Execute 'onChange' event
      onChange(option, e)
    },
    [onChange]
  )

  useMounted(() => {
    if (ref.current !== null) {
      // Get the size of the option
      const size = ref.current.getBoundingClientRect().height

      // Update size of the option
      setOptionSize(index, size)
    }
  }, [windowWidth])

  return (
    <button ref={ref} onClick={handleOnChange} className="virtualized-option">
      {isValidElement(markup) ? markup : label}
    </button>
  )
}

export default memo(VirtualizedOption, (prevProps, nextProps) => {
  return prevProps.windowWidth === nextProps.windowWidth
})
