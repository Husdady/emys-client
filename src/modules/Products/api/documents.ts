// Librarys
import { gql } from 'graphql-request'

// Utils
import createProductsFragment from './utils/createProductsFragment'
import createProductImageFragment from '@modules/Product/api/utils/createProductImageFragment'

export const ProductDocument = gql`
  query GetProducts(
    $q: String
    $page: Int
    $limit: Int
    $type: String
    $sortBy: String
    $sortType: String
    $populate: Boolean
    $sku: String
    $code: String
    $maker: String
    $origin: String
    $minPrice: Float
    $maxPrice: Float
    $totalUnits: Int
    $isInStock: Boolean
    $productName: String
    $categories: [String!]
  ) {
    products(
      q: $q
      type: $type
      page: $page
      limit: $limit
      sortBy: $sortBy
      sortType: $sortType
      populate: $populate
      categories: $categories
      productName: $productName
      sku: $sku
      code: $code
      maker: $maker
      origin: $origin
      minPrice: $minPrice
      maxPrice: $maxPrice
      isInStock: $isInStock
      totalUnits: $totalUnits
    ) {
      data {
        ...ProductsFields
        images {
          ...ProductImageFields
        }
        coverImage {
          ...ProductImageFields
        }
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

  ${createProductImageFragment()}
  ${createProductsFragment('Product')}
`

export const FavoriteProductDocument = gql`
  query GetFavoriteProducts(
    $q: String
    $page: Int
    $limit: Int
    $type: String
    $sortBy: String
    $sortType: String
    $populate: Boolean
    $sku: String
    $code: String
    $maker: String
    $origin: String
    $minPrice: Float
    $maxPrice: Float
    $totalUnits: Int
    $isInStock: Boolean
    $productName: String
    $categories: [String!]
    $favoriteProductsId: [String!]!
  ) {
    myFavoriteProducts(
      q: $q
      type: $type
      page: $page
      limit: $limit
      sortBy: $sortBy
      sortType: $sortType
      populate: $populate
      categories: $categories
      productName: $productName
      sku: $sku
      code: $code
      maker: $maker
      origin: $origin
      minPrice: $minPrice
      maxPrice: $maxPrice
      isInStock: $isInStock
      totalUnits: $totalUnits
      favoriteProductsId: $favoriteProductsId
    ) {
      data {
        ...ProductsFields
        images {
          ...ProductImagesFields
        }
        coverImage {
          ...ProductImageFields
        }
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

  ${createProductsFragment('Product')}
`
