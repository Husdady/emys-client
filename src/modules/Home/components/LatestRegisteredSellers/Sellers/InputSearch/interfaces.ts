// Types
import type { Dispatch, SetStateAction } from 'react'

// Interfaces
import { Seller } from '@modules/Sellers/api/interfaces'

export interface InputSearchProps {
  sellers: Seller[]
  setResults: Dispatch<SetStateAction<Seller[]>>
}
