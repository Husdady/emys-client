// Librarys
import { memo } from 'react'
import { createId } from '@libs/nanoid'
import dynamic from 'next/dynamic'

// Interfaces
import { SectionProps } from './interfaces'

// Utils
import isString from '@utils/isString'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))

function Section(props: SectionProps) {
  return (
    <section className="footer-section">
      <h4 className="title text-uppercase font-lexend text-amber-300 mb-0">- {props.title} -</h4>

      <ul className="footer-links m-0 mt-1.5">
        {props.links
          ?.map((link) => ({ id: createId(), ...link }))
          ?.map((link) => (
            <li
              key={link.id}
              className="footer-link-item text-white font-lexend text-[0.84rem] mb-[0.15rem] last:mb-0"
            >
              {isString(link.href) && (
                <>
                  {!props.hasExternalLinks && (
                    <Link href={link.href} className="footer-link">
                      {link.icon}
                      {link.text}
                    </Link>
                  )}

                  {props.hasExternalLinks === true && (
                    <a target="_blank" rel="noreferrer" className="footer-link" href={link.href}>
                      {link.icon}
                      {link.text}
                    </a>
                  )}
                </>
              )}
            </li>
          ))}
      </ul>
    </section>
  )
}

export default memo(Section)
