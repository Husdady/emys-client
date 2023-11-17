// Librarys
import NProgress from 'nprogress'

// Hooks
import useMounted from './useMounted'
import { usePathname, useSearchParams } from 'next/navigation'

/**
 * Hook for hide the Nprogress bar
 */
export default function useNprogressDone() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useMounted(() => {
    NProgress.done()
  }, [pathname, searchParams])
}
