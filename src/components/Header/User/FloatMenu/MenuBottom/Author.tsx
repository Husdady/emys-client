// Utils
import isString from '@utils/isString'

// Environment variables
import { DEVELOPER_LINKEDIN_URL } from '@config/envs'

// Data
import pk from '@root/package.json'

export default function Author() {
  return (
    <span
      id="author"
      className="pt-[0.33rem] px-2 block text-center text-gray-500 text-[0.65rem] font-lato tracking-tight dark:text-gray-300/80"
    >
      Aplicación desarrollada por{' '}
      <a
        rel="noreferrer"
        className="hover:underline hover:font-semibold"
        href={!isString(DEVELOPER_LINKEDIN_URL) ? '#' : DEVELOPER_LINKEDIN_URL}
      >
        @{pk.author.name}
      </a>
    </span>
  )
}
