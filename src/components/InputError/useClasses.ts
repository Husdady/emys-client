// Hooks
import { useMemo } from 'react'

// Types
import type { UseClassesParams } from './types'

// Utils
import classnames from '@utils/classnames'

/**
 * Hook that create the classes for the InputError component
 * @param {UseClassesParams} params Receive some props of InputError component
 */
export default function useClasses({
  textClassName,
  iconClassName,
  containerClassName
}: UseClassesParams) {
  // Create component classes
  const classes = useMemo(() => {
    return {
      // Create classes when component received a valid error prop
      error: classnames([
        textClassName,
        'font-semibold text-red-600 dark:text-red-400 dark:font-normal'
      ]),

      // Create classes for icon of component
      icon: classnames([iconClassName, 'text-red-600 dark:text-red-400']),

      // Create container classes
      container: classnames([
        containerClassName,
        'input-error flex items-center mt-2 gap-x-1 leading-tight'
      ])
    }
  }, [])

  return classes
}
