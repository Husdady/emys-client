// Hooks
import useMounted from '@hooks/useMounted'
import useBiggestTabletScreen from '@root/src/hooks/screen/useBiggestTabletScreen'
import { useRef, useCallback, useMemo } from 'react'
import { usePathname } from 'next/navigation'

// Constants
import { HOME_PATH } from '@data/paths'

/**
 * Hook for implements the logic of the FloatButtons component
 */
export default function useFloatButtons() {
  const pathname = usePathname()
  const isBiggestTabletScreen = useBiggestTabletScreen()
  const floatButtonsRef = useRef<HTMLDivElement | null>(null)

  // Check if is the Home page
  const isHomePage = useMemo(() => pathname === HOME_PATH, [pathname])

  // Callback for show or hide the navigation in Desktop devices
  const handleMoveFloatButtons = useCallback(() => {
    if (!isHomePage || floatButtonsRef.current === null) return

    if (window.scrollY > 450 && !isBiggestTabletScreen) {
      floatButtonsRef.current.classList.add('!right-[1%]')
      floatButtonsRef.current.classList.remove('!right-[2.5%]')
    } else {
      floatButtonsRef.current.classList.add('!right-[2.5%]')
      floatButtonsRef.current.classList.remove('!right-[1%]')
    }
  }, [isBiggestTabletScreen])

  useMounted(() => {
    window.addEventListener('scroll', handleMoveFloatButtons)

    return () => {
      window.removeEventListener('scroll', handleMoveFloatButtons)
    }
  }, [])

  return {
    floatButtonsRef: floatButtonsRef,
    isBiggestTabletScreen: isBiggestTabletScreen
  }
}
