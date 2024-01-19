// Interfaces
import { Testimony } from '@modules/Testimonials/api/interfaces'

export interface LatestTestimonials {
  latestTestimonials: Testimony[]
}

export interface LatestTestimonialsArgs {
  limit: number
  populate?: boolean
}
