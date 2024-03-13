// Hooks
import { useMemo } from 'react'
import { useGetLatestTestimonialsQuery } from '@modules/Home/api/getLatestTestimonials/graphql'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

// Constants
import { THREE_MINUTES } from '@data/interval'
import { LIMIT_LATEST_TESTIMONIALS } from './constants'

/**
 * Hook for implements the logic of the LatestRegisteredTestimonials component
 */
export default function useLatestRegisteredTestimonials() {
  const queryData = useGetLatestTestimonialsQuery(
    { populate: true, limit: LIMIT_LATEST_TESTIMONIALS },
    { refetchOnReconnect: true, refetchOnMountOrArgChange: true, pollingInterval: THREE_MINUTES }
  )

  // Define the latest testimonials
  const testimonials = useMemo(
    () => queryData?.data?.latestTestimonials ?? [],
    [queryData?.data?.latestTestimonials]
  )

  // Check if has empty latest testimonials
  const hasEmptyTestimonials = useMemo(() => isEmptyArray(testimonials), [testimonials])

  // return {
  //   testimonials: testimonials,
  //   isError: queryData.isError,
  //   isLoading: queryData.isLoading,
  //   hasEmptyTestimonials: hasEmptyTestimonials
  // }
  return {
    testimonials: [],
    isError: false,
    isLoading: false,
    hasEmptyTestimonials: true
  }
}
