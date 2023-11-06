// Types
import type { ReactNode } from 'react'
import type { LinkType } from './constants'
import { Url } from 'next/dist/shared/lib/router/router'

export interface Link {
  href?: Url
  text?: string
  icon: ReactNode
}

export interface SectionProps {
  title: string
  type: LinkType
  links: Link[]
  hasExternalLinks?: boolean
}
