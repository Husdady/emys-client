// Librarys
import { gql } from 'graphql-request'

export const CategoryListDocument = gql`
  query GetCategoryList($type: String) {
    categoryList(type: $type) {
      id
      name
    }
  }
`
