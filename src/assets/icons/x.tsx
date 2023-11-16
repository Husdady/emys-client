// Components
import IconSuspense from '@components/Icon/IconSuspense'

// Type
import type { IconSvgProps } from '@components/Icon/types'

export default function X(props: IconSvgProps) {
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
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </IconSuspense>
  )
}
