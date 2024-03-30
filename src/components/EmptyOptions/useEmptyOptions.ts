// Hooks
import { useRef } from "react"
import useFixPositionOfFloatOptions from "@hooks/useFixPositionOfFloatOptions"

/**
 * Hook for implements the logic of the EmptyOptions component
 */
export default function useEmptyOptions() {
  const ref = useRef<HTMLDivElement | null>(null)

  useFixPositionOfFloatOptions({ ref: ref })
  
  return {
    ref: ref
  }
}