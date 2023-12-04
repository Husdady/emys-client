// Librarys
import { gql } from 'graphql-request'

/**
 * Create a Ubigeo Fragment
 * @param {string} model Model name
 */
export const createUbigeoFragment = (model: string) => gql`
  fragment UbigeoFields on ${model} {
    country {
      id
      country
    }
    region {
      id
      region
    }
    province {
      id
      province
    }
    district {
      id
      district
    }
  }
`
