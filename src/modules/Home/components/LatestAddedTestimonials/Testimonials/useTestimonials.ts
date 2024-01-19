// Librarys
import { useState } from 'react'

// Hooks
import useMounted from '@hooks/useMounted'

// Interfaces
import { TestimonialsProps } from './interfaces'

/**
 * Hook for implements the logic of the Testimonials component
 * @param {TestimonialsProps} params Receive props of the Testimonials component
 */
export default function useTestimonials({ isLoading, testimonials }: TestimonialsProps) {
  const [results, setResults] = useState(testimonials)

  useMounted(() => {
    if (!isLoading) {
      setResults(testimonials)
    }
  }, [testimonials, isLoading])

  return {
    results: results,
    setResults: setResults
  }
}
