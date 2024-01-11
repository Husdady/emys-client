// Librarys
import { gql } from 'graphql-request'

export const LatestTestimonialsDocument = gql`
  query GetLatestTestimonials($limit: Int, $populate: Boolean) {
    latestTestimonials(limit: $limit, populate: $populate) {
      id
    }
  }
`
