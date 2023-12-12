// Librarys
import NextLink from 'next/link'
import NProgress from 'nprogress'
import { memo, useMemo, forwardRef } from 'react'

// Interfaces
import { LinkProps } from './interfaces'

// Utils
import isString from '@utils/isString'
import shouldTriggerStartEvent from './utils/shouldTriggerStartEvent'

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
    <NextLink
      {...rest}
      shallow
      ref={ref}
      href={href}
      onClick={(event) => {
        if (shouldTriggerStartEvent(href, event)) NProgress.start()
        if (onClick) onClick(event)
      }}
    >
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
