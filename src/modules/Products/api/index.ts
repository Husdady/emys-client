// // Interfaces
// import {
//   AddProductParams,
//   CopyProductParams,
//   UpdateProductParams,
//   AddOmnilifeProductParams,
//   CopyOmnilifeProductParams,
//   UpdateOmnilifeProductParams,
//   DeleteProductParams,
//   DeleteProductImageParams,
//   SaveWhatsAppContactMessageParams
// } from './interfaces'

// // API
// import { api } from '@config/store/api'

// export const productsApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     // Add new product
//     addProduct: builder.mutation({
//       query: (params: AddProductParams) => ({
//         ...params,
//         method: 'POST',
//         url: '/products'
//       })
//     }),

//     // Add new Omnilife product
//     addOmnilifeProduct: builder.mutation({
//       query: ({ type, ...params }: AddOmnilifeProductParams) => ({
//         ...params,
//         method: 'POST',
//         url: '/products/omnilife',
//         params: { type: type }
//       })
//     }),

//     // Copy existing product
//     copyProduct: builder.mutation({
//       query: ({ product, ...params }: CopyProductParams) => ({
//         ...params,
//         url: '/products/copy',
//         method: 'POST',
//         params: { product: product }
//       })
//     }),

//     // Copy existing Omnilife product
//     copyOmnilifeProduct: builder.mutation({
//       query: ({ type, product, ...params }: CopyOmnilifeProductParams) => ({
//         ...params,
//         url: '/products/omnilife/copy',
//         method: 'POST',
//         params: {
//           type: type,
//           product: product
//         }
//       })
//     }),

//     // Update an existing product
//     updateProduct: builder.mutation({
//       query: ({ productId, ...params }: UpdateProductParams) => ({
//         ...params,
//         method: 'PATCH',
//         url: `/products/${productId}`
//       })
//     }),

//     // Update an existing Omnilife product
//     updateOmnilifeProduct: builder.mutation({
//       query: ({ type, productId, ...params }: UpdateOmnilifeProductParams) => ({
//         ...params,
//         method: 'PATCH',
//         url: `/products/omnilife/${productId}`,
//         params: { type: type }
//       })
//     }),

//     // Save or update the WhatsApp contact message
//     saveWhatsAppContactMessage: builder.mutation({
//       query: ({ productId, ...params }: SaveWhatsAppContactMessageParams) => ({
//         ...params,
//         method: 'PATCH',
//         url: `/products/${productId}/save-wsp-message`
//       })
//     }),

//     // Delete an existing product
//     deleteProduct: builder.mutation({
//       query: ({ productId, ...params }: DeleteProductParams) => ({
//         ...params,
//         method: 'DELETE',
//         url: `/products/${productId}`
//       })
//     }),

//     // Delete a product images
//     deleteProductImage: builder.mutation({
//       query: ({ imageId, productId, ...params }: DeleteProductImageParams) => ({
//         ...params,
//         method: 'DELETE',
//         url: `/products/${productId}/images/${imageId}`
//       })
//     })
//   })
// })

// export const {
//   useAddProductMutation,
//   useCopyProductMutation,
//   useUpdateProductMutation,
//   useAddOmnilifeProductMutation,
//   useCopyOmnilifeProductMutation,
//   useUpdateOmnilifeProductMutation,
//   useSaveWhatsAppContactMessageMutation,
//   useDeleteProductMutation,
//   useDeleteProductImageMutation
// } = productsApi
