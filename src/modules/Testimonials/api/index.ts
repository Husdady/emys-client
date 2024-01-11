// // Interfaces
// import { DeleteSellerParams, RegisterSellerParams, EditSellerInformationParams } from './interfaces'

// // API
// import { api } from '@config/store/api'

// export const sellersApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     // Register new seller
//     registerSeller: builder.mutation({
//       query: ({ ...params }: RegisterSellerParams) => ({
//         ...params,
//         url: '/sellers',
//         method: 'POST'
//       })
//     }),

//     // Edit information of the seller
//     editSellerInformation: builder.mutation({
//       query: ({ sellerId, ...params }: EditSellerInformationParams) => ({
//         ...params,
//         method: 'PATCH',
//         url: `/sellers/${sellerId}`
//       })
//     }),

//     // Delete seller
//     deleteSeller: builder.mutation({
//       query: ({ sellerId, ...params }: DeleteSellerParams) => ({
//         ...params,
//         method: 'DELETE',
//         url: `/sellers/${sellerId}`
//       })
//     })
//   })
// })

// export const {
//   useDeleteSellerMutation,
//   useRegisterSellerMutation,
//   useEditSellerInformationMutation
// } = sellersApi
