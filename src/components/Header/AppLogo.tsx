// Librarys
import { memo } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Hooks
import useTheme from '@hooks/useTheme'

// Types
import type { ImageProps } from 'next/image'

// Constants
import { HOME_PATH } from '@assets/data/paths'

// Images
import logo from '@assets/images/logo.webp'
import logoDark from '@assets/images/logo-dark.webp'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))

export type AppLogo = Pick<ImageProps, 'width' | 'height' | 'className'>

function AppLogo(props: AppLogo) {
  const { isLightTheme } = useTheme()

  return (
    <Link href={HOME_PATH}>
      <Image
        {...props}
        priority
        loading="eager"
        alt="logo-image"
        src={isLightTheme ? logo.src : logoDark}
      />
    </Link>
  )
}

export default memo(AppLogo)
