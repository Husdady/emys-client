// Components
import IconSuspense from '@components/Icon/IconSuspense'

// Type
import type { IconSvgProps } from '@components/Icon/types'

export default function Key(props: IconSvgProps) {
  return (
    <IconSuspense {...props}>
      <svg
        width="24"
        height="24"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="8" cy="15" r="4" />
        <line x1="10.85" y1="12.15" x2="19" y2="4" />
        <line x1="18" y1="5" x2="20" y2="7" />
        <line x1="15" y1="8" x2="17" y2="10" />
      </svg>
    </IconSuspense>
  )
}
