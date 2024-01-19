// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Components
import LinkIcon from '@assets/icons/link'

// Constants
import { TESTIMONIALS_PATH } from '@assets/data/paths'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))

export default function Header() {
  return (
    <div className="latest-registered-sellers-header px-3 max-w-[1100px] mx-auto text-center flex justify-center">
      <Link
        href={TESTIMONIALS_PATH}
        title="Ir a la sección de Testimonios Omnilife"
        className="flex items-center justify-center text-main-500 dark:text-rose-300 hover:text-rose-400 dark:hover:text-rose-400 gap-x-3 gap-y-4"
      >
        <h5 className="text-3xl font-lexend break-word">Testimonios Omnilife</h5>
        <LinkIcon size="xxl" />
      </Link>
    </div>
  )
}
