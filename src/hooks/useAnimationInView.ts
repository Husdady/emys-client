// Hooks
import { useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import useBiggestTabletScreen from './useBiggestTabletScreen'

// Utils
import classnames from '@utils/classnames'

/**
 * Hook for animate element when is in view
 */
export default function useAnimationInView(animationName: string) {
  const { ref, inView } = useInView()
  const isBiggestTabletScreen = useBiggestTabletScreen()

  // Define the animate
  const animationClassName = useMemo(() => {
    if (isBiggestTabletScreen) return
    return classnames(['animate__animated', inView ? animationName : null])
  }, [inView, isBiggestTabletScreen])

  return {
    ref: ref,
    animationClassName: animationClassName
  }
}
