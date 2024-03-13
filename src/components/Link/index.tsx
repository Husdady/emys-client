// Librarys
import NextLink from 'next/link'
import { memo, useMemo, forwardRef } from 'react'

// Interfaces
import { LinkProps } from './interfaces'

// Utils
import isString from '@utils/isString'

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, onClick, children, ...rest },
  ref
) {
  // Check if has 'href' prop
  const hasHref = useMemo(() => isString(href) && href.startsWith('/'), [href])

  // Retun 'a' tag
  if (!hasHref) {
    return (
      <a href={isString(href) ? href : '#'} onClick={onClick} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <NextLink {...rest} shallow ref={ref} href={href} onClick={onClick}>
      {children}
    </NextLink>
  )
})

export default memo(Link, (prevProps, nextProps) => {
  return (
    prevProps.href === nextProps.href &&
    prevProps.onClick === nextProps.onClick &&
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className
  )
})
