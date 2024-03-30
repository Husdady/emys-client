// Librarys
import { memo } from 'react'

// Hooks
import useEmptyOptions from './useEmptyOptions'

// Interfaces
import { EmptyOptionsProps } from './interfaces'

// Constants
import { DEFAULT_TEXT } from './constants'

function EmptyOptions({ style, text = DEFAULT_TEXT }: EmptyOptionsProps) {
  const { ref } = useEmptyOptions()

  return (
    <section ref={ref} style={style} className="wrapper-options">
      <span className="empty-options bg-white rounded-md dark:bg-gray-900 w-full h-full flex items-center justify-center font-lexend font-semibold dark:text-gray-400 px-4 text-center leading-snug min-h-[150px]">
        <span className="max-w-[320px] mx-auto">{text}</span>
      </span>
    </section>
  )
}

export default memo(EmptyOptions)
