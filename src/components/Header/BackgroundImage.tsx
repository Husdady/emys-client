// Librarys
import Image from 'next/image'

// Images
import omnilifeLogo from '@images/logo-omnilife.webp'

// Fondo de cabezera
export default function HeaderBackgroundImage() {
  return (
    <figure className="logo-omnilife mb-0 position-relative">
      <Image
        priority
        alt="omnilife-logo"
        loading="eager"
        layout="fill"
        objectFit="contain"
        src={omnilifeLogo.src}
      />
    </figure>
  )
}
