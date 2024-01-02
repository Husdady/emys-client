// Hooks
import { useRef, useCallback } from 'react'
import useBiggestTabletScreen from '@hooks/useBiggestTabletScreen'
import useMobileScreen from '@hooks/useMobileScreen'
import useMounted from '@hooks/useMounted'

/**
 * Hook for implements the logic of the FloatButtons component
 */
export default function useFloatButtons() {
  const isMobileScreen = useMobileScreen()
  const isBiggestTabletScreen = useBiggestTabletScreen()
  const floatButtonsRef = useRef<HTMLDivElement | null>(null)

  // Callback for show or hide the navigation in Desktop devices
  const handleMoveFloatButtons = useCallback(() => {
    if (floatButtonsRef.current === null) return

    if (window.scrollY > 450 && !isBiggestTabletScreen) {
      floatButtonsRef.current.classList.add('right-[1%]')
      floatButtonsRef.current.classList.remove('right-[2.5%]')
    } else {
      floatButtonsRef.current.classList.add('right-[2.5%]')
      floatButtonsRef.current.classList.remove('right-[1%]')
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
