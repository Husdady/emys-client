// Librarys
import { memo } from 'react'

// Constants
import { OMNILIFE_CLIENT_URL, OMNILIFE_ENTREPRENEUR_URL } from '@config/envs'

function Buttons() {
  return (
    <section className="footer-membership">
      <h4 className="title text-uppercase font-lexend text-amber-300 mb-2">- Afiliación -</h4>

      <a
        target="_blank"
        rel="noreferrer"
        href={OMNILIFE_CLIENT_URL}
        className="btn-omnilife-client bg-amber-200 text-pink-900 py-2.5 px-4 mb-2.5 hover:bg-amber-300 table"
      >
        Cliente Admirable
      </a>

      <a
        target="_blank"
        rel="noreferrer"
        href={OMNILIFE_ENTREPRENEUR_URL}
        className="btn-entrepreneur-client bg-sky-200 text-sky-900 py-2.5 px-4 hover:bg-emerald-200 table"
      >
        Empresario Admirable
      </a>
    </section>
  )
}

export default memo(Buttons)
