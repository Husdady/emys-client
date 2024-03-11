// Types
import type { ReactNode } from 'react'

// Interfaces
import { OnlyClassNameProp } from '@config/interfaces'

export interface FiltersContainerProps extends OnlyClassNameProp {
  buttons: ReactNode
  inputSearch: ReactNode
}
