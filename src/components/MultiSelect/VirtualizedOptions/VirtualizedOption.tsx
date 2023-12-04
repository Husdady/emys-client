// Librarys
import { memo, useRef } from 'react'

// Components
import Checkbox from '@components/Checkbox'

// Hooks
import useMounted from '@hooks/useMounted'

// Interfaces
import { VirtualizedOptionProps } from './interfaces'

function VirtualizedOption({
  value,
  label,
  index,
  onChange,
  component,
  windowWidth,
  setOptionSize,
  isMarkedOption
}: VirtualizedOptionProps) {
  const ref = useRef<HTMLButtonElement | null>(null)

  useMounted(() => {
    if (ref.current !== null) {
      // Get the size of the option
      const size = ref.current.getBoundingClientRect().height

      // Update size of the option
      setOptionSize(index, size)
    }
  }, [windowWidth])

  return (
    <Checkbox
      value={value}
      onToggle={onChange}
      label={component ?? label}
      checked={isMarkedOption(value)}
      containerClassName="virtualized-checkbox-option"
    />
  )
}

export default memo(VirtualizedOption, (prevProps, nextProps) => {
  return (
    prevProps.onChange === nextProps.onChange &&
    prevProps.windowWidth === nextProps.windowWidth &&
    prevProps.isMarkedOption === nextProps.isMarkedOption
  )
})
