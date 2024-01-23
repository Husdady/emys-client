// Types
import type { Url } from 'next/dist/shared/lib/router/router'

export interface HeaderLinkProps {
  href: Url
  title: string
  className?: string
  popupTitle?: string
  linkClassName?: string
}
