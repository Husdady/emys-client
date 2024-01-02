// Hooks
import { useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import useMobileScreen from './useMobileScreen'

// Utils
import classnames from '@utils/classnames'

/**
 * Hook for animate element when is in view
 */
export default function useAnimationInView(animationName: string) {
  const { ref, inView } = useInView()
  const isMobileScreen = useMobileScreen()

  // Define the animate
  const animationClassName = useMemo(() => {
    if (isMobileScreen) return
    return classnames(['animate__animated', inView ? animationName : null])
  }, [inView, isMobileScreen])

  return {
    ref: ref,
    animationClassName: animationClassName
  }
}
