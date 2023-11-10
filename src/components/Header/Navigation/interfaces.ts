// Types
import type { ReactNode } from 'react'
import type { Url } from 'next/dist/shared/lib/router/router'

export interface NavigationLinkProps {
  href: Url
  text: string
  icon: ReactNode
}
