// Librarys
import Image from 'next/image'

// Hooks
import useTheme from '@hooks/useTheme'

// Images
import logo from '@assets/images/logo.webp'
import logoDark from '@assets/images/logo-dark.webp'

export default function AppLogo() {
  const { isLightTheme } = useTheme()

  return (
    <Image
      priority
      width={481}
      height={387}
      alt="emprendimiento-y-salud"
      className="app-logo block mx-auto min-w-max"
      src={isLightTheme ? logo.src : logoDark.src}
    />
  )
}
