// Librarys
import React from 'react'

// Types
import type { UseButtonParams } from './types'

// Utils
import classnames from '@utils/classnames'

/**
 * Generate the logic of the Button component
 * @param {UseButtonParams} props Receive Button component props
 */
export default function useButton({ onClick, onDoubleClick, className }: UseButtonParams) {
  // Define component classes
  const buttonClassName = React.useMemo(
    () =>
      classnames([
        className,
        'btn overflow-hidden relative outline-none flex flex-wrap items-center justify-center gap-x-2 gap-y-1'
      ]),
    [className]
  )

  // Event 'click' of the Button
  const handleDoubleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      // One click on button
      if (e.detail === 1) onClick?.(e)

      // Double click on button
      if (e.detail === 2) onDoubleClick?.(e)
    },
    [onClick, onDoubleClick]
  )

  return {
    buttonClassName: buttonClassName,
    handleDoubleClick: handleDoubleClick
  }
}
