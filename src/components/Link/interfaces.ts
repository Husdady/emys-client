// Types
import type { LinkProps as NextLinkProps } from 'next/link'

// Interfaces
import { OnlyChildrenProp, OnlyClassNameProp } from '@config/interfaces'

export interface LinkProps extends NextLinkProps, OnlyChildrenProp, OnlyClassNameProp {
  title?: string
}
