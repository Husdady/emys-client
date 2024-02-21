// Types
import { Dispatch, SetStateAction } from 'react'

export interface UnitsProps {
  units: number
  productUnits?: number | null
  setUnits: Dispatch<SetStateAction<number>>
}
