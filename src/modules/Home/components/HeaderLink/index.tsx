// Librarys
import dynamic from 'next/dynamic'

// Components
import ExternalLinkIcon from '@components/Icons/ExternalLink'

// Interfaces
import { HeaderLinkProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))

export default function HeaderLink({
  href,
  title,
  className,
  popupTitle,
  linkClassName
}: HeaderLinkProps) {
  return (
    <div
      className={classnames([
        className,
        'px-3 max-w-[1100px] mx-auto text-center flex justify-center'
      ])}
    >
      <Link
        href={href}
        title={popupTitle}
        className={classnames([linkClassName, 'flex items-center justify-center gap-x-3 gap-y-4'])}
      >
        <h5 className="text-4xl font-lexend break-word">{title}</h5>
        <ExternalLinkIcon size="xml" />
      </Link>
    </div>
  )
}
