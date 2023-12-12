// Types
import type { ReactNode } from 'react'
import type { Url } from 'next/dist/shared/lib/router/router'

export interface Link {
  href?: Url
  text?: string
  icon: ReactNode
}

export interface SectionProps {
  title: string
  links: Link[]
  hasExternalLinks?: boolean
}
