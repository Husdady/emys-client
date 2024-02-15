// Librarys
import { gql } from 'graphql-request'

// Utils
import { createUbigeoFragment } from '@modules/Ubigeo/api/documents'

export const SellerDocument = gql`
  query GetSellers(
    $q: String
    $page: Int
    $limit: Int
    $sortBy: String
    $sortType: String
    $dni: String
    $ruc: String
    $phone: String
    $status: String
    $fullname: String
    $region: String
    $country: String
    $province: String
    $district: String
    $populate: Boolean
  ) {
    sellers(
      q: $q
      page: $page
      limit: $limit
      sortBy: $sortBy
      sortType: $sortType
      dni: $dni
      ruc: $ruc
      phone: $phone
      status: $status
      fullname: $fullname
      region: $region
      country: $country
      province: $province
      district: $district
      populate: $populate
    ) {
      data {
        id
        dni
        ruc
        code
        email
        phone
        status
        fullname
        socialNetworks {
          id
          url
          name
          type
        }
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

  ${createUbigeoFragment('Seller')}
`
