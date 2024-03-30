// Hooks
import { useCallback } from 'react'
import { usePathname } from 'next/navigation'
import useMounted from '@hooks/useMounted'

// Constants
import querySelectors from './querySelectors'
import { HOME_PATH, CONTACT_PATH, ACCOUNT_PATH, MEMBERSHIP_PATH } from '@data/paths'

const MARGIN_CLASSNAME = '!mt-[3.5rem]'
const PADDING_CLASSNAME = '!pt-[1.25rem]'
const QUERY_SELECTOR = '#__next > main > section'

interface Params {
  isShowingHeader: boolean
}

/**
 * Hook for fix position of the page
 * @param {Params} params Receive a 'isShowingHeader'
 */
export default function useFixPositionPage(params: Params) {
  const pathname = usePathname()

  // Callback for handle the scroll event
  const handleScroll = useCallback(() => {
    handleFixPositionPage({ isShowingHeader: params.isShowingHeader })
  }, [params.isShowingHeader])

  // Callback for fix the position of the page when the Header is hidden
  const handleFixPositionPage = useCallback(
    ({ isShowingHeader }: Params) => {
      // Validates scrollbar position
      if (window.scrollY > 50) return

      // Get query selector
      const querySelector =
        querySelectors[pathname as keyof typeof querySelectors] ?? QUERY_SELECTOR

      // Validates main section
      const mainSection = document.querySelector(querySelector)
      if (!mainSection) return

      // Check if the current path is HOME
      const isHomePath = pathname === HOME_PATH

      // Define the classname
      let className = isHomePath ? MARGIN_CLASSNAME : PADDING_CLASSNAME

      // Check if is a special pathname
      const isSpecialPath = [CONTACT_PATH, ACCOUNT_PATH, MEMBERSHIP_PATH].includes(pathname)

      if (isSpecialPath) {
        className = '!pt-[3rem]'
      }

      // Remove class from main section if is showing the Header
      if (isShowingHeader) {
        return mainSection.classList.remove(className)
      }

      // Add class from main section if is hidden the Header
      mainSection.classList.add(className)
    },
    [pathname]
  )

  useMounted(() => {
    document.addEventListener('scroll', handleScroll)
    document.addEventListener('resize', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
      document.removeEventListener('resize', handleScroll)
    }
  }, [params.isShowingHeader])

  return {
    handleFixPositionPage: handleFixPositionPage
  }
}
