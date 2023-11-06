// React
import React from 'react'

// Components
import MenuItem from './Header.MenuItem'

// Librarys
import Link from 'next/link'

// Interfaces
import { NavigationItemProps } from '@interfaces'

// Environment variables
import { PUBLIC_URL } from '@envs'

// Elemento de navegación
export default function NavigationItem({
  tag,
  icon,
  path,
  title,
  type = 'link',
  showArrow,
  isExternalUrl,
  onAction
}: NavigationItemProps) {
  // Render element content
  const ElementContent = () => {
    return <MenuItem icon={icon} title={title} showArrow={showArrow} />
  }

  // Render element type
  const TypeElement = () => {
    if (type === 'text') {
      return (
        <span className="link">
          <ElementContent />
        </span>
      )
    }

    const pathStr = typeof path === 'string'
    const externalUrl = !isExternalUrl ? (PUBLIC_URL as string) : ''
    const activeTarget = !pathStr ? path.target : undefined
    const activePath = !pathStr ? path.pathname : path
    const hrefLink = externalUrl + activePath

    return (
      <Link href={hrefLink}>
        <a className="link" target={activeTarget} rel="noreferrer">
          <ElementContent />
        </a>
      </Link>
    )
  }

  const element = <TypeElement />

  const attributes = {
    onClick: onAction,
    className: 'navigation-item d-inline-block pointer'
  }

  return React.createElement(tag, attributes, element)
}

NavigationItem.defaultProps = {
  tag: 'li',
  type: 'link'
}
