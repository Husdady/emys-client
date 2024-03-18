// Librarys
import { memo } from 'react'

// Interfaces
import { EmptyOptionsProps } from './interfaces'

// Constants
import { DEFAULT_TEXT } from './constants'

function EmptyOptions({ text = DEFAULT_TEXT }: EmptyOptionsProps) {
  return (
    <span className="empty-options bg-white rounded-md dark:bg-gray-900 w-full h-full flex items-center justify-center font-lexend font-semibold dark:text-gray-400 px-4 text-center leading-snug min-h-[150px]">
      <span className="max-w-[320px] mx-auto">{text}</span>
    </span>
  )
}

export default memo(EmptyOptions)
