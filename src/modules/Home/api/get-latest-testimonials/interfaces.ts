// Interfaces
import { Testimonial } from '@modules/Testimonials/api/interfaces'

export interface LatestTestimonials {
  latestTestimonials: Testimonial[]
}

export interface LatestTestimonialsArgs {
  limit: number
  populate?: boolean
}
