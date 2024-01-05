// Hooks
import { useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import useBiggestTabletScreen from './useBiggestTabletScreen'

// Utils
import classnames from '@utils/classnames'

/**
 * Hook for animate element when is in view
 * @param {string} animationName Receive the name of the animation
 * @param {string} animationUtilityClassName Receive the utilities for the animation
 */
export default function useAnimationInView(
  animationName: string,
  animationUtilityClassName?: string
) {
  const isBiggestTabletScreen = useBiggestTabletScreen()
  const { ref, inView } = useInView({ threshold: 1, trackVisibility: false })

  // Define the animate
  const animationClassName = useMemo(() => {
    if (isBiggestTabletScreen) return
    return classnames([
      'animate__animated',
      animationUtilityClassName,
      inView ? animationName : 'animate__fadeOut'
    ])
  }, [inView, animationName, isBiggestTabletScreen, animationUtilityClassName])

  return {
    ref: ref,
    animationClassName: animationClassName
  }
}
