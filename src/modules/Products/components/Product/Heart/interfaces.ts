// Interfaces
import { ProductProps } from '@modules/Products/components/Product/interfaces'

export interface HeartProps
  extends Pick<ProductProps, 'makeRequest' | 'stopRequest' | 'isMakingRequest'> {
  productId: string
  productName: string
}
