// Librarys
import { memo } from 'react'
import Image from 'next/image'

// Hooks
import useAppLogo from './useAppLogo'

function AppLogo() {
  const { appLogoSrc } = useAppLogo()

  return (
    <Image
      priority
      width={481}
      height={387}
      sizes="400px"
      alt="emprendimiento-y-salud"
      className="app-logo block mx-auto min-w-max min-w-[387px]"
      src={appLogoSrc}
    />
  )
}

export default memo(AppLogo)
