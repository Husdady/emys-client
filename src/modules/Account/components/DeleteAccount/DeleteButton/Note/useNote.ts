// Hooks
import { useState, useCallback } from 'react'

/**
 * Hook for implements the logic of the Note component
 */
export default function useNote() {
  const [isShowingNote, setShowingNote] = useState(true)

  // Hide note
  const hideNote = useCallback(() => setShowingNote(false), [])

  return {
    hideNote: hideNote,
    isShowingNote: isShowingNote
  }
}
