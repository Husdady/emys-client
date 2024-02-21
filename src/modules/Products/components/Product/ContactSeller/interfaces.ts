// Interfaces
import { Product } from '@modules/Products/api/interfaces'
import { Seller } from '@modules/Sellers/api/interfaces'

export interface Message {
  seller: Seller
  productName: string
}

export interface ContactSellerProps extends Pick<Product, 'name' | 'isInStock' | 'mainSeller'> {
  defaultMessage?: (message: Message) => string | string
}
