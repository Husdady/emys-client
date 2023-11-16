// Librarys
import Image from 'next/image'

// Hooks
import useTheme from '@hooks/useTheme'

// Images
import appLogo from '@assets/images/logo.webp'
import appLogoDark from '@assets/images/logo-dark.webp'

export default function AppLogo() {
  const { isLightTheme } = useTheme()

  return (
    <Image
      width={481}
      height={387}
      alt="emprendimiento-y-salud"
      className="app-logo block mx-auto min-w-max"
      src={isLightTheme ? appLogo : appLogoDark}
    />
  )
}
