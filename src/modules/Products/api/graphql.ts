// // Interfaces
// import { Products, ProductsPaginationArgs } from './interfaces'

// // API
// import { api } from '@config/store/graphql'

// // Documents
// import { ProductDocument, AllProductsDocument, RelatedProductDocument } from './documents'

// // Constants
// import { PRODUCTS_KEY } from '@config/store/graphql/constants'

// export const productsGraphqlApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     // Get products
//     GetProducts: builder.query<Products, ProductsPaginationArgs>({
//       providesTags: [PRODUCTS_KEY],
//       query: (variables) => ({
//         variables: variables,
//         document: ProductDocument
//       })
//     }),

//     // Get all products
//     GetAllProducts: builder.query<Products, ProductsPaginationArgs>({
//       providesTags: [PRODUCTS_KEY],
//       query: (variables) => ({
//         variables: variables,
//         document: AllProductsDocument
//       })
//     }),

//     // Get related products
//     GetRelatedProducts: builder.query<Products, ProductsPaginationArgs>({
//       providesTags: [PRODUCTS_KEY],
//       query: (variables) => ({
//         variables: variables,
//         document: RelatedProductDocument
//       })
//     })
//   })
// })

// export const {
//   useGetProductsQuery,
//   useGetAllProductsQuery,
//   useGetRelatedProductsQuery,
//   useLazyGetProductsQuery,
//   useLazyGetAllProductsQuery,
//   useLazyGetRelatedProductsQuery
// } = productsGraphqlApi
