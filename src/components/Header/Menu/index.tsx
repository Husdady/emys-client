// React
import React from 'react'

// Components
// import { Collapse } from '@components'
import NavigationItem from './Header.NavigationItem'

// Librarys
import Link from 'next/link'
import Image from 'next/image'
import { Collapse } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Interfaces
import {
  HeaderMenuIconProps,
  HeaderNavigationLink,
  HeaderNavigationSubLink
} from '@interfaces'

// Environment variables
import { PUBLIC_URL } from '@envs'

// Images
import omnilifeLogoMenu from '@images/logo-omnilife-menu.webp'

// JSON
const navigation: HeaderNavigationLink[] = require('@data/navigation.json')

// Menú para móviles
export default function HeaderMenu() {
  const isMenuOpen = React.useRef(false)
  const refMenu = React.useRef<HTMLDivElement | null>(null)

  // Event 'click' on menu icon
  const onPressMenuIcon = () => {
    if (refMenu.current !== null) {
      if (isMenuOpen.current) {
        refMenu.current.classList.remove('open') // Remove class 'open'
      } else {
        refMenu.current.classList.add('open') // Add class 'open'
      }

      isMenuOpen.current = !isMenuOpen.current
    }
  }

  // Render Menu sub link
  const renderNavigationSubLink = (subLink: HeaderNavigationSubLink) => {
    return <NavigationItem key={subLink.id} {...subLink} />
  }

  // Render Menu link
  const renderNavigationLink = (item: HeaderNavigationLink) => {
    // Navigation link without submenu
    if (!item.submenu) {
      return <NavigationItem key={item.id} {...item} />
    }

    const subItems = item.submenu.map(renderNavigationSubLink)
    const header = (
      <NavigationItem key={item.id} {...item} showArrow type="text" />
    )

    return (
      <Collapse key={item.id}>
        <Collapse.Panel key={item.id} showArrow={false} header={header}>
          {subItems}
        </Collapse.Panel>
      </Collapse>
    )
  }

  return (
    <React.Fragment>
      {/* Header Menu Icon 'times' or 'bars' */}
      <HeaderMenuIcon onAction={onPressMenuIcon} />

      <div ref={refMenu} id="menu" className="navigation-item-wrapper">
        {/* Menu links */}
        <ul className="navigation-menu m-0 p-0">
          {navigation.map(renderNavigationLink)}
        </ul>

        {/* Omnilife Logo */}
        <figure>
          <Link href={PUBLIC_URL as string}>
            <a rel="noreferrer">
              <Image
                width={342}
                height={103}
                loading="eager"
                id="logo-omnilife"
                alt="omnilife-logo-menu"
                src={omnilifeLogoMenu.src}
              />
            </a>
          </Link>
        </figure>
      </div>
    </React.Fragment>
  )
}

// <------------------------ Extra Components ------------------------>
export const HeaderMenuIcon = ({ onAction }: HeaderMenuIconProps) => {
  const [isOpen, setOpen] = React.useState<boolean>(false)

  // Event 'click' on Menu Icon
  const handleClick = React.useCallback(() => {
    onAction()
    setOpen((currentState) => !currentState)
  }, [])

  return (
    <div
      role="button"
      className="wrapper-nav-menu-icon rounded-1"
      onClick={handleClick}
    >
      <FontAwesomeIcon
        size="lg"
        id="nav-menu-icon"
        icon={isOpen ? 'times' : 'bars'}
        className={isOpen ? 'menu-icon' : 'menu-close-icon'}
      />
    </div>
  )
}
