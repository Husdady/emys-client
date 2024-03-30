// Librarys
import { showFloatWarningMessage } from '@libs/antd/message'
import { useRef, useMemo, useState, useCallback, MouseEvent } from 'react'

// Components
import HeartSolid from '@components/Icons/HeartSolid'
import HeartRegular from '@components/Icons/HeartRegular'

// Hooks
import useAuth from '@modules/Auth/states/auth/useAuth'
import useMobileScreen from '@hooks/screen/useMobileScreen'
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
export default function useHeart({ productId, productName, makeRequest, stopRequest }: HeartProps) {
  const isMobileScreen = useMobileScreen()
  const buttonWrapperRef = useRef<HTMLDivElement | null>(null)
  const { user, signOut, updateUser, isAuthenticated } = useAuth()

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
    if (queryDataForAdd.isLoading || queryDataForRemove.isLoading) return ''

    if (isAddedToFavorites) {
      return `Remover ${productName} de tus productos favoritos`
    }

    return `Añadir ${productName} a tus productos favoritos`
  }, [isAddedToFavorites, queryDataForAdd.isLoading, queryDataForRemove.isLoading])

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
    // if (queryDataForAdd.isLoading || queryDataForRemove.isLoading) return
    if (!isAddedToFavorites) return handleSetHeartSolid()
  }, [
    isAddedToFavorites,
    handleSetHeartSolid,
    handleSetHeartRegular
    // queryDataForAdd.isLoading,
    // queryDataForRemove.isLoading
  ])

  // Event 'mouse-leave' in Heart button
  const handleMouseLeave = useCallback(() => {
    if (isAddedToFavorites) return handleSetHeartSolid()
    handleSetHeartRegular()
  }, [isAddedToFavorites, handleSetHeartSolid, handleSetHeartRegular])

  // Callback for add the product to favorites
  const handleAddToFavorites = useCallback(
    async ({ favoriteProductsId }: { favoriteProductsId: string[] }) => {
      handleSetHeartSolid() // Show 'heart-regular' icon

      // Make request to the API for add product to Favorites
      const result = await addToFavorites({ signOut: signOut, data: { productId: productId } })

      // Remove the favorite product id in the User data
      if ('data' in result) {
        return updateUser({ favoriteProductsId: [...favoriteProductsId, productId] })
      }

      setAddedToFavorites(false) // Rollback to prev state
      setIconType(HEART_REGULAR) // Show 'heart-regular' icon

      // Check if the favorite product id exists in the favorite products id
      const hasProductId = favoriteProductsId.includes(productId)
      if (hasProductId) return // Stop function

      // Define the new favorite products id
      const newFavoriteProductsId = favoriteProductsId.filter(
        (favoriteProductId) => favoriteProductId !== productId
      )

      return updateUser({ favoriteProductsId: newFavoriteProductsId })
    },
    [productId, handleSetHeartSolid, handleSetHeartRegular]
  )

  // Callback for remove the product from the favorites
  const handleRemoveToFavorites = useCallback(
    async ({ favoriteProductsId }: { favoriteProductsId: string[] }) => {
      handleSetHeartRegular() // Show 'heart-regular' icon

      // Make request to the API for remove product from Favorites
      const result = await removeFromFavorites({ signOut: signOut, productId: productId })

      // Remove the favorite product id in the User data
      if ('data' in result) {
        // Define the new favorite products id
        const newFavoriteProductsId = favoriteProductsId.filter(
          (favoriteProductId) => favoriteProductId !== productId
        )

        return updateUser({ favoriteProductsId: newFavoriteProductsId })
      }

      setAddedToFavorites(true) // Rollback to prev state
      setIconType(HEART_SOLID) // Show 'heart-solid' icon

      // Check if the favorite product id not exists in the favorite products id
      const hasNotProductId = !favoriteProductsId.includes(productId)
      if (hasNotProductId) return // Stop function

      return updateUser({ favoriteProductsId: [...favoriteProductsId, productId] })
    },
    [productId, handleSetHeartSolid, handleSetHeartRegular]
  )

  // Callback for add product to favorites or remove the product from the favorites
  const handleToggleToFavorites = useCallback(
    async (e: MouseEvent<HTMLDivElement> | MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      e.preventDefault()

      // The user is not logged in
      if (!isAuthenticated) {
        return showFloatWarningMessage(
          `Para añadir ${productName} a tus productos favoritos, debes iniciar sesión`
        )
      }

      makeRequest?.() // Make request
      setAddedToFavorites((s) => !s) // Toggle added to favorites

      // Get the favorite products id of the user
      const favoriteProductsId = [...(user?.favoriteProductsId ?? [])]

      // Product is already added to favorites
      if (isAddedToFavorites) {
        // Remove product from favorites
        await handleRemoveToFavorites({ favoriteProductsId: favoriteProductsId })
      } else {
        // Add product from favorites
        await handleAddToFavorites({ favoriteProductsId: favoriteProductsId })
      }

      stopRequest?.() // Stop request
    },
    [
      productName,
      makeRequest,
      stopRequest,
      isAuthenticated,
      isAddedToFavorites,
      handleAddToFavorites,
      handleRemoveToFavorites,
      user?.favoriteProductsId
    ]
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
    isMobileScreen: isMobileScreen,
    handleMouseEnter: handleMouseEnter,
    handleMouseLeave: handleMouseLeave,
    buttonWrapperRef: buttonWrapperRef,
    isAddedToFavorites: isAddedToFavorites,
    handleSetHeartSolid: handleSetHeartSolid,
    handleSetHeartRegular: handleSetHeartRegular,
    handleToggleToFavorites: handleToggleToFavorites,
    isRemovingFromFavorites: queryDataForRemove.isLoading,
    disabled: queryDataForAdd.isLoading || queryDataForRemove.isLoading
  }
}
