// Hooks
import useMounted from '@hooks/useMounted'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

export interface QueryObject extends Object {
  q?: string
}

export interface Params<T extends QueryObject> {
  query: T
  searchValue: string
  setSearchValue: (value: string) => void
}

/**
 * Hook for validate the search value
 */
export default function useValidateSearchValue<T extends QueryObject>({
  query,
  searchValue,
  setSearchValue
}: Params<T>) {
  useMounted(() => {
    const q = query.q

    if (isEmptyString(q) && isString(q) && !isEmptyString(q)) {
      setSearchValue(q)
    } else if (!q && isString(searchValue) && !isEmptyString(searchValue)) {
      setSearchValue('')
    }
  }, [query.q])
}
