// // Interfaces
// import { Sellers, SellerList, SellersPaginationArgs } from './interfaces'

// // API
// import { api } from '@config/store/graphql'

// // Documents
// import { SellerDocument, SellerListDocument } from './documents'

// // Constants
// import { SELLERS_KEY } from '@config/store/graphql/constants'

// export const sellersGraphqlApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     // Get Sellers with pagination format
//     GetSellers: builder.query<Sellers, SellersPaginationArgs>({
//       providesTags: [SELLERS_KEY],
//       query: (variables) => ({
//         variables: variables,
//         document: SellerDocument
//       })
//     }),

//     // Get Sellers with list format
//     GetSellerList: builder.query<SellerList, Omit<SellersPaginationArgs, 'page' | 'limit'>>({
//       providesTags: [SELLERS_KEY],
//       query: (variables) => ({
//         variables: variables,
//         document: SellerListDocument
//       })
//     })
//   })
// })

// export const {
//   useGetSellersQuery,
//   useGetSellerListQuery,
//   useLazyGetSellersQuery,
//   useLazyGetSellerListQuery
// } = sellersGraphqlApi
