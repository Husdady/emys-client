// Interfaces
import { MutableRefObject } from 'react'
import { Product } from '@modules/Products/api/interfaces'

export interface ProductsProps {
  isLoading: boolean
  products: Product[]
  hasScrollbar: boolean
  productItemsRef: MutableRefObject<HTMLUListElement | null>
}
