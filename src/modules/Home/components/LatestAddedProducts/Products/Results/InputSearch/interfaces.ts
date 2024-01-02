// Types
import type { Dispatch, SetStateAction } from 'react'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

export interface InputSearchProps {
  products: Product[]
  setResults: Dispatch<SetStateAction<Product[]>>
}
