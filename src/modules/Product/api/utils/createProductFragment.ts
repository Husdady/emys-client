// Librarys
import { gql } from 'graphql-request'

/**
 * Create a Product Fragment
 * @param {string} model Model name
 */
const createProductFragment = (model: string) => gql`
  fragment ProductFields on ${model} {
    tags
    type
    maker
    weight
    content
    weightType
    totalUnits
    totalVisits
    benefits
    usageMode
    userRating
    customProductFields {
      id
      type
      fieldName
    }
    extraInformation {
      fieldId
      textValue
      listValues
    }
    coverImageId
    characteristics
    countryOrigin {
      country
    }
    images {
      id
      url
      width
      height
      filename
    }
  }
`
export default createProductFragment
