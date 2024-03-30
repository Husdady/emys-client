/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-dynamic-delete */
// Librarys
import { useMemo, useCallback } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

// Types
import type { UpdateCallback } from './types'

// Interfaces
import { QueryResponse, FilterQueryParams } from './interfaces'

// Utils
import leaf from '@utils/leaf'
import unset from '@utils/unset'
import isUndefined from '@utils/isUndefined'
import isEmptyArray from '@utils/isEmptyArray'
import isEmptyString from '@utils/isEmptyString'
import isEmptyObject from '@utils/isEmptyObject'
import unsetInvalidValues from '@utils/unsetInvalidValues'
import getAllQueryParamsFields from '@utils/getAllQueryParamsFields'

/**
 * Hook for update or delete query params
 * @param {FilterQueryParams<DefaultQuery>} options List of availables query params or default query params
 * @returns {QueryResponse} Query Filters and two functions for mutate query params
 */
export default function useFiltersQuery<DefaultQuery extends object>({
  queryParamsFields,
  defaultQueryParams
}: FilterQueryParams<DefaultQuery>): QueryResponse<DefaultQuery> {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Filters of query params
  const filters = useMemo(() => {
    const args = {} // Create argument filters

    // Iterate allowed fields
    for (const queryParamsField of queryParamsFields) {
      // Get value from an allowed query param
      const queryParam = searchParams.get(queryParamsField)
      if (queryParam === null || isEmptyString(queryParam)) continue

      // Assigns to the temporary object, a query param with its parsed value
      Object.assign(args, {
        [queryParamsField]: JSON.parse(queryParam)
      })
    }

    if (isUndefined(defaultQueryParams)) return args as DefaultQuery
    return { ...defaultQueryParams, ...args }
  }, [searchParams.toString()])

  // Callback to remove a query param
  const deleteQueryParam = useCallback(
    (field: string) => {
      //  Create URL search params based the current search params
      const current = new URLSearchParams(Array.from(searchParams.entries()))
      current.delete(field)

      const search = current.toString() // Get the search value
      const query = search ? `?${search}` : '' // Define the new query string
      router.push(`${pathname}${query}`) // Push query param to the router
    },
    [pathname, searchParams]
  )

  // Update current query params
  const updateQueryParams = useCallback(() => {
    const obj: Record<string, any> = {} // Define an object for the new query
    const keys = Object.keys(obj) // Get payload fields

    for (const key of keys) {
      const value = obj[key] // Get each value

      // Remove value that is an empty 'string' or an empty object
      if (
        isEmptyArray(value) ||
        isEmptyString(value) ||
        isEmptyObject(value) ||
        !queryParamsFields.includes(key)
      ) {
        delete obj[key]
        continue
      }

      if (!isEmptyObject(value)) {
        unsetInvalidValues(obj) // Clean nested object
        continue
      }
    }

    const current = new URLSearchParams() //  Create URL search params

    for (const key of keys) {
      const value = obj[key] // Get each value
      if (value === null) continue // Value not allowed
      if (isUndefined(value)) continue // Value not allowed
      obj[key] = JSON.stringify(value) // Assign value received from payload to object
      current.set(key, obj[key])
    }

    const search = current.toString() // Get the search value
    const query = search ? `?${search}` : '' // Define the new query string
    router.push(`${pathname}${query}`) // Push query param to the router
  }, [pathname])

  // Callback that gets the current query params and executes a callback
  const update = useCallback(
    <T>(payload: T, callback: UpdateCallback<T>) => {
      const obj: Record<string, any> = {}
      const fields = getAllQueryParamsFields() // Get all query params
      const queryParams = new URLSearchParams(window.location.search) // Get query params

      for (const field of fields) {
        const queryParam = queryParams.get(field) // Get a query params
        if (queryParam === null) continue // Query param does not exist in url
        obj[field] = JSON.parse(queryParam) // Assign query param to 'obj'
      }

      callback(obj, payload) // Execute the callback
      const keys = Object.keys(obj) // Get payload fields

      for (const key of keys) {
        const value = obj[key] // Get each value

        // Remove value that is an empty 'string' or an empty object
        if (
          isEmptyArray(value) ||
          isEmptyString(value) ||
          isEmptyObject(value) ||
          !queryParamsFields.includes(key)
        ) {
          delete obj[key]
          continue
        }

        if (!isEmptyObject(value)) {
          unsetInvalidValues(obj) // Clean nested object
          continue
        }
      }

      const current = new URLSearchParams() //  Create URL search params

      for (const key of keys) {
        const value = obj[key] // Get each value
        if (value === null) continue // Value not allowed
        if (isUndefined(value)) continue // Value not allowed
        obj[key] = JSON.stringify(value) // Assign value received from payload to object
        current.set(key, obj[key])
      }

      const search = current.toString() // Get the search value
      const query = search ? `?${search}` : '' // Define the new query string
      router.replace(`${pathname}${query}`) // Push query param to the router
    },
    [pathname]
  )

  // Callback that removes a nested query param
  const deleteNestedQueryParam = useCallback(
    (path: string[]) => {
      update<string[]>(path, (obj) => unset(obj, path))
    },
    [update]
  )

  // Callback that is executed when enter is pressed
  const createQueryParams = useCallback(
    (payload: Record<string, unknown>) => {
      update<Record<string, unknown>>(payload, (obj) => {
        leaf(obj, payload)
      })
    },
    [update]
  )

  return {
    query: filters,
    updateQueryParams: updateQueryParams,
    createQueryParams: createQueryParams,
    deleteQueryParam: deleteQueryParam,
    deleteNestedQueryParam: deleteNestedQueryParam
  }
}
