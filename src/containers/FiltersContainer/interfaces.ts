// Types
import type { ReactNode } from 'react'

// Interfaces
import { OnlyClassNameProp } from '@config/global-interfaces'

export interface FiltersContainerProps extends OnlyClassNameProp {
  buttons: ReactNode
  inputSearch: ReactNode
}
