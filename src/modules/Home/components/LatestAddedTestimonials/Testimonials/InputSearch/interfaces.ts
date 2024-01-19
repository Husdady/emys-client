// Types
import type { Dispatch, SetStateAction } from 'react'

// Interfaces
import { Testimony } from '@modules/Testimonials/api/interfaces'

export interface InputSearchProps {
  testimonials: Testimony[]
  setResults: Dispatch<SetStateAction<Testimony[]>>
}
