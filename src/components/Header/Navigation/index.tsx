// React
import React from 'react'

// Components
import { Dropdown } from '@components'
import HeaderMenu from './Header.Menu'
import HeaderMenuItem from './Header.MenuItem'
import NavigationItem from './Header.NavigationItem'

// Librarys
import Image from 'next/image'

// Interfaces
import { HeaderNavigationLink, HeaderNavigationSubLink } from '@interfaces'

// Images
import seytuLogo from '@images/logo-seytu.webp'

// JSON
const navigation: HeaderNavigationLink[] = require('@data/navigation.json')

export default function HeaderNavigation() {
  // Render navigation sub link
  const renderNavigationSubLink = (subLink: HeaderNavigationSubLink) => {
    return {
      el: <NavigationItem tag="div" key={subLink.id} {...subLink} />
    }
  }

  // Render navigation link
  const renderNavigationLink = (item: HeaderNavigationLink) => {
    // Navigation link without submenu
    if (!item.submenu) {
      return <NavigationItem key={item.id} {...item} />
    }

    const subItems = item.submenu.map(renderNavigationSubLink)

    return (
      <li key={item.id} className="navigation-item d-inline-block">
        <Dropdown subItems={subItems}>
          <span className="link pointer">
            <HeaderMenuItem showArrow icon={item.icon} title={item.title} />
          </span>
        </Dropdown>
      </li>
    )
  }

  return (
    <nav id="navigation" className="shortcut-navigation">
      <div className="wrapper mx-auto d-flex jc-between align-items-center">
        {/* Seytú Logo */}
        <figure id="logo-seytu" className="mb-0 position-relative">
          <Image
            priority
            alt="seytu-logo"
            loading="eager"
            layout="fill"
            objectFit="contain"
            src={seytuLogo.src}
          />
        </figure>

        {/* Navigation Menu */}
        <HeaderMenu />
        <ul className="navigation-item-wrapper m-0 p-0">
          {navigation.map(renderNavigationLink)}
        </ul>
      </div>
    </nav>
  )
}
