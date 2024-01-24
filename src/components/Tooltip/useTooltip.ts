// Librarys
import { useMemo, useCallback, CSSProperties } from 'react'

// Hooks
import useTheme from '@hooks/useTheme'

// Constants
import colors from './colors'

/**
 * Hook for implements the logic on the Help component
 */
export default function useTooltip() {
  const { isDarkTheme } = useTheme()

  // Define Overlay Inner style
  const innerStyle: CSSProperties = useMemo(
    () => ({
      color: isDarkTheme ? colors.darkTextColor : colors.lightTextColor
    }),
    [isDarkTheme]
  )

  // Get custom container
  const getContainer = useCallback(() => {
    const root = document.getElementById('root')
    if (root === null) return document.body
    return root
  }, [])

  return {
    innerStyle: innerStyle,
    isDarkTheme: isDarkTheme,
    getContainer: getContainer
  }
}
