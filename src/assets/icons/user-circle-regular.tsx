// Components
import IconSuspense from '@components/Icon/IconSuspense'

// Type
import type { IconSvgProps } from '@components/Icon/types'

export default function UserCircleRegular(props: IconSvgProps) {
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
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="10" r="3" />
        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
      </svg>
    </IconSuspense>
  )
}
