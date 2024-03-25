// Interfaces
import { Product } from '@modules/Products/api/interfaces'

export interface ProductProps extends Product {
  makeRequest?: () => void
  stopRequest?: () => void
  isMakingRequest?: boolean
}
