// React
import { memo } from 'react'

// Components
import CopyrightIcon from '@assets/icons/copyright'

// Data
import pk from '@root/package.json'

// Constants
import { DEVELOPER_LINKEDIN_URL } from '@config/envs'

function Copyright() {
  return (
    <section
      id="copyright"
      className="py-2 px-4 flex items-center justify-center font-lexend text-[0.75rem] text-white border-t border-amber-200 overflow-hidden"
    >
      <CopyrightIcon className="text-amber-400" />
      <span className="ms-1">
        Aplicación web desarrollada por&nbsp;
        <a
          id="developer"
          target="_blank"
          rel="noreferrer"
          className="hover:text-sky-200 hover:underline"
          href={DEVELOPER_LINKEDIN_URL}
        >
          {pk.author.name}
        </a>
      </span>
    </section>
  )
}

export default memo(Copyright)
