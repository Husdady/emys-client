// // Librarys
// import { gql } from 'graphql-request'

// export const ProductDocument = gql`
//   query GetProducts(
//     $page: Int
//     $limit: Int
//     $type: String
//     $sortBy: String
//     $sortType: String
//     $populate: Boolean
//     $sku: String
//     $code: String
//     $maker: String
//     $origin: String
//     $minPrice: Float
//     $maxPrice: Float
//     $totalUnits: Int
//     $isInStock: Boolean
//     $productName: String
//     $categories: [String!]
//   ) {
//     products(
//       type: $type
//       page: $page
//       limit: $limit
//       sortBy: $sortBy
//       sortType: $sortType
//       populate: $populate
//       categories: $categories
//       productName: $productName
//       sku: $sku
//       code: $code
//       maker: $maker
//       origin: $origin
//       minPrice: $minPrice
//       maxPrice: $maxPrice
//       isInStock: $isInStock
//       totalUnits: $totalUnits
//     ) {
//       data {
//         id
//         sku
//         name
//         type
//         code
//         tags
//         maker
//         content
//         benefits
//         usageMode
//         weight
//         weightType
//         price
//         currencyType
//         coverImageId
//         isInStock
//         totalUnits
//         description
//         characteristics
//         categoriesId
//         relatedProductsId
//         allowedSellersId
//         disallowedSellersId
//         whatsappContactMessage
//         countryOrigin {
//           id
//           country
//         }
//         images {
//           id
//           url
//           filename
//         }
//         createdAt
//         updatedAt
//       }
//       meta {
//         total
//         perPage
//         currentPage
//         prev
//         next
//       }
//     }
//   }
// `

// export const AllProductsDocument = gql`
//   query GetAllProducts($page: Int, $limit: Int, $populate: Boolean, $productName: String) {
//     products(page: $page, limit: $limit, populate: $populate, productName: $productName) {
//       data {
//         id
//         name
//         price
//         content
//         weight
//         weightType
//         totalUnits
//         currencyType
//         images {
//           id
//           url
//           filename
//         }
//         createdAt
//         updatedAt
//       }
//       meta {
//         total
//         perPage
//         currentPage
//         prev
//         next
//       }
//     }
//   }
// `
