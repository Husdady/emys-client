// Librarys
import { showFloatWarningMessage } from '@libs/antd/message'

// Hooks
import useAuth from '@modules/Auth/states/auth/useAuth'
import { useState, useCallback } from 'react'
import { useRateProductMutation } from '@modules/Product/api'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

/**
 * Hook for implements the logic of the Stars component
 * @param {Product} product Receive a 'product'
 */
export default function useStars(product: Product) {
  const { signOut, isAuthenticated } = useAuth()
  const [rateProduct, result] = useRateProductMutation()
  const [starsGiven, setStarsGiven] = useState<number>(product.userRating ?? 0)
  const [prevStarsGiven, setPrevStarsGiven] = useState<number>(product.userRating ?? 0)

  // Callback for set the stars
  const setStars = useCallback(
    async (total: number) => {
      if (!isAuthenticated) {
        return showFloatWarningMessage('Debes iniciar sesión para calificar productos')
      }

      await rateProduct({
        signOut: signOut,
        productId: product.id,
        data: { rating: total }
      })

      setStarsGiven(total)
      setPrevStarsGiven(total)
    },
    [product]
  )

  // Callback for handle the mouse enter event
  const handleMouseEnter = useCallback(
    (total: number) => () => {
      if (result.isLoading) return
      setStarsGiven(total)
    },
    [result.isLoading]
  )

  // Callback for handle the mouse enter event
  const handleMouseLeave = useCallback(() => {
    if (result.isLoading) return
    setStarsGiven(prevStarsGiven)
  }, [prevStarsGiven, result.isLoading])

  return {
    setStars: setStars,
    starsGiven: starsGiven,
    isRating: result.isLoading,
    prevStarsGiven: prevStarsGiven,
    handleMouseEnter: handleMouseEnter,
    handleMouseLeave: handleMouseLeave
  }
}
