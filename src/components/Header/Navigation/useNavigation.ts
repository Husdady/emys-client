// Hooks
import useTheme from '@hooks/useTheme'
import { usePathname } from 'next/navigation'

/**
 * Hook for implements the logc of the Navigation component
 */
export default function useNavigation() {
  const pathname = usePathname()
  const { isLightTheme } = useTheme()

  return {
    pathname: pathname,
    isLightTheme: isLightTheme
  }
}
