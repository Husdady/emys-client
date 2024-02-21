// Librarys
import { showFloatInfoMessage, showFloatWarningMessage } from '@libs/antd/message'

// Hooks
import useAuth from '@hooks/useAuth'
import { useState, useCallback } from 'react'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

/**
 * Hook for implements the logic of the Stars component
 */
export default function useStars(product: Product) {
  const { isAuthenticated } = useAuth()
  const [starsGiven, setStarsGiven] = useState<number>(0)
  const [prevStarsGiven, setPrevStarsGiven] = useState<number>(0)

  // Callback for set the stars
  const setStars = useCallback(
    (total: number) => {
      if (!isAuthenticated) {
        return showFloatWarningMessage('Debes iniciar sesión para calificar productos')
      }

      setStarsGiven(total)
      setPrevStarsGiven(total)
      showFloatInfoMessage(`Calificaste a ${product.name} con ${total} estrellas`)
    },
    [product]
  )

  // Callback for handle the mouse enter event
  const handleMouseEnter = useCallback(
    (total: number) => () => {
      setStarsGiven(total)
    },
    []
  )

  // Callback for handle the mouse enter event
  const handleMouseLeave = useCallback(() => {
    setStarsGiven(prevStarsGiven)
  }, [prevStarsGiven])

  return {
    setStars: setStars,
    starsGiven: starsGiven,
    prevStarsGiven: prevStarsGiven,
    handleMouseEnter: handleMouseEnter,
    handleMouseLeave: handleMouseLeave
  }
}
