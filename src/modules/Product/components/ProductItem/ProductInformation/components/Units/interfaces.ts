// Types
import { Dispatch, SetStateAction } from 'react'

export interface UnitsProps {
  units: number
  isInStock: boolean
  productUnits?: number | null
  setUnits: Dispatch<SetStateAction<number>>
}
