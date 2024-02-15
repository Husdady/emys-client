// Librarys
import { gql } from 'graphql-request'

// Utils
import { createUbigeoFragment } from '@modules/Ubigeo/api/documents'

export const TestimonyDocument = gql`
  query GetTestimonials(
    $q: String
    $limit: Int
    $page: Int
    $region: String
    $country: String
    $province: String
    $district: String
    $authorName: String
    $sortBy: String
    $sortType: String
  ) {
    testimonials(
      q: $q
      page: $page
      limit: $limit
      region: $region
      country: $country
      province: $province
      district: $district
      authorName: $authorName
      sortBy: $sortBy
      sortType: $sortType
    ) {
      data {
        id
        author
        userId
        testimony
        photo {
          url
          filename
        }
        ...UbigeoFields
        createdAt
        updatedAt
      }
      meta {
        total
        perPage
        currentPage
        prev
        next
      }
    }
  }

  ${createUbigeoFragment('Testimony')}
`
