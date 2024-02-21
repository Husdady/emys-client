// Hooks
import useMounted from '@hooks/useMounted'
import { useParams } from 'next/navigation'
import { useLazyGetProductQuery } from '@modules/Product/api/graphql'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

/**
 * Hook for implements the logic of the ProductWrapper component
 */
export default function useProductWrapper() {
  const params = useParams()
  const [getProduct, result] = useLazyGetProductQuery()

  useMounted(() => {
    const code = params?.code

    if (isString(code) && !isEmptyString(code)) {
      getProduct({ code: params?.code as string })
    }
  }, [params?.code])

  return result
}
