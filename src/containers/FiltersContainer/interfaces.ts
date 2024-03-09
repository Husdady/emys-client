// Types
import type { ReactNode } from 'react'

// Interfaces
import { OnlyClassNameProp } from '@config/globalInterfaces'

export interface FiltersContainerProps extends OnlyClassNameProp {
  buttons: ReactNode
  inputSearch: ReactNode
}
