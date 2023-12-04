// Librarys
import { memo } from 'react'

// Interfaces
import { EmptyOptionsProps } from './interfaces'

// Constants
import { DEFAULT_TEXT } from './constants'

function EmptyOptions({ text = DEFAULT_TEXT }: EmptyOptionsProps) {
  return (
    <span className="empty-options bg-white dark:bg-gray-900 w-full h-full flex items-center justify-center font-lexend font-semibold dark:text-gray-400 px-4 text-center leading-snug min-h-[150px]">
      {text}
    </span>
  )
}

export default memo(EmptyOptions)
