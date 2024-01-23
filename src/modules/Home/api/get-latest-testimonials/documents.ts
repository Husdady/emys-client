// Librarys
import { gql } from 'graphql-request'

// Utils
import { createUbigeoFragment } from '@modules/Ubigeo/api/documents'

export const LatestTestimonialsDocument = gql`
  query GetLatestTestimonials($limit: Int, $populate: Boolean) {
    latestTestimonials(limit: $limit, populate: $populate) {
      id
      author
      testimony
      ...UbigeoFields
      photo {
        url
        width
        height
      }
      createdAt
    }
  }

  ${createUbigeoFragment('Testimony')}
`
