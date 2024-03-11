// Librarys
import React from 'react'

// Types
import type { UseButtonParams } from './types'

/**
 * Generate the logic of the Button component
 * @param {UseButtonParams} props Receive Button component props
 */
export default function useButton({ onClick, onDoubleClick }: UseButtonParams) {
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
    handleDoubleClick: handleDoubleClick
  }
}
