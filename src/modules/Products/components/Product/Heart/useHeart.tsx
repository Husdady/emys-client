// Librarys
import { showFloatWarningMessage } from '@libs/antd/message'
import { useRef, useMemo, useState, useCallback, MouseEvent } from 'react'

// Components
import HeartSolid from '@assets/icons/heart-solid'
import HeartRegular from '@assets/icons/heart-regular'

// Hooks
import useAuth from '@hooks/useAuth'
import {
  useAddProductToFavoritesMutation,
  useRemoveProductFromFavoritesMutation
} from '@modules/Products/api'

// Interfaces
import { HeartProps } from './interfaces'
import { IconProps } from '@components/Icon/interfaces'

// Constants
import { HEART_SOLID, HEART_REGULAR, type HeartIconType } from './constants'

/**
 * Hook for implements the logic of the Heart component
 * @param {HeartProps} params Receive a 'productId' and 'productName'
 */
export default function useHeart({ productId, productName }: HeartProps) {
  const { user, updateUser, isAuthenticated } = useAuth()
  const buttonWrapperRef = useRef<HTMLDivElement | null>(null)

  const [isAddedToFavorites, setAddedToFavorites] = useState(() => {
    if (isAuthenticated) {
      return user?.favoriteProductsId?.some((favoriteProductId) => favoriteProductId === productId)
    }

    return false
  })

  const [iconType, setIconType] = useState<HeartIconType>(
    isAddedToFavorites ? HEART_SOLID : HEART_REGULAR
  )

  const [addToFavorites, queryDataForAdd] = useAddProductToFavoritesMutation()
  const [removeFromFavorites, queryDataForRemove] = useRemoveProductFromFavoritesMutation()

  // Check if is a 'heart-regular' icon type
  const isHeartRegular = useMemo(() => iconType === HEART_REGULAR, [iconType])

  // Define the title popup of the Heart button
  const titlePopup = useMemo(() => {
    if (isAddedToFavorites) {
      return `Remover ${productName} de tus productos favoritos`
    }

    return `Añadir ${productName} a tus productos favoritos`
  }, [isAddedToFavorites])

  // Callback for set the icon typeto 'heart-solid'
  const handleSetHeartSolid = useCallback(() => {
    if (!isHeartRegular) return
    setIconType(HEART_SOLID)
  }, [isHeartRegular])

  // Callback for set the icon typeto 'heart-regular'
  const handleSetHeartRegular = useCallback(() => {
    if (isHeartRegular) return
    setIconType(HEART_REGULAR)
  }, [isHeartRegular])

  // Event 'mouse-enter' in Heart button
  const handleMouseEnter = useCallback(() => {
    if (!isAddedToFavorites) return handleSetHeartSolid()
    // handleSetHeartRegular()
  }, [isAddedToFavorites, handleSetHeartSolid, handleSetHeartRegular])

  // Event 'mouse-leave' in Heart button
  const handleMouseLeave = useCallback(() => {
    if (isAddedToFavorites) return handleSetHeartSolid()
    handleSetHeartRegular()
  }, [isAddedToFavorites, handleSetHeartSolid, handleSetHeartRegular])

  // Callback for add or remove the product to the favorites
  const handleToggleToFavorites = useCallback(
    async (e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>) => {
      // The user is not logged in
      if (!isAuthenticated) {
        return showFloatWarningMessage(
          `Para añadir ${productName} a tus productos favoritos, debes iniciar sesión`
        )
      }

      e.stopPropagation()

      // Get the favorite products id of the user
      const favoriteProductsId = [...(user?.favoriteProductsId ?? [])]

      if (isAddedToFavorites) {
        handleSetHeartRegular() // Show 'heart-regular' icon

        // Make request to the API for remove product from Favorites
        const result = await removeFromFavorites({ productId: productId })

        if ('data' in result) {
          // Update User data
          updateUser({
            favoriteProductsId: favoriteProductsId.filter(
              (favoriteProductId) => favoriteProductId !== productId
            )
          })
        }
      } else {
        handleSetHeartSolid() // Show 'heart-solid' icon

        // Make request to the API for add product to Favorites
        const result = await addToFavorites({ data: { productId: productId } })

        if ('data' in result) {
          // Update User data
          updateUser({ favoriteProductsId: [...favoriteProductsId, productId] })
        }
      }

      setAddedToFavorites((s) => !s) // Toggle added to favorites
    },
    [productName, isAuthenticated, isAddedToFavorites, handleSetHeartSolid, handleSetHeartRegular]
  )

  // Define the Heart icon
  const HeartIcon = useCallback(() => {
    const sharedIconProps: IconProps = {
      size: 'smd',
      onClick: handleToggleToFavorites
    }

    if (isHeartRegular) {
      return <HeartRegular {...sharedIconProps} />
    }

    return <HeartSolid {...sharedIconProps} />
  }, [handleToggleToFavorites])

  return {
    HeartIcon: HeartIcon,
    titlePopup: titlePopup,
    handleMouseEnter: handleMouseEnter,
    handleMouseLeave: handleMouseLeave,
    buttonWrapperRef: buttonWrapperRef,
    isAddedToFavorites: isAddedToFavorites,
    handleSetHeartSolid: handleSetHeartSolid,
    handleSetHeartRegular: handleSetHeartRegular,
    handleToggleToFavorites: handleToggleToFavorites,
    disabled: queryDataForAdd.isLoading || queryDataForRemove.isLoading
  }
}
