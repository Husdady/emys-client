// Hooks
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

// Interfaces
import { BackButtonProps } from './interfaces'

export type Params = Pick<BackButtonProps, 'path'>

/**
 * Hook for implements the logic of the BackButton component
 * @param {Params} params Receive a 'path'
 */
export default function useBackButton({ path }: Params) {
  const router = useRouter()

  // Callback for go to some path
  const goToPath = useCallback(() => {
    router.push(path)
  }, [])

  return {
    goToPath: goToPath
  }
}
