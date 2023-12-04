// Components
import IconSuspense from '@components/Icon/IconSuspense'

// Type
import type { IconSvgProps } from '@components/Icon/types'

export default function Reload(props: IconSvgProps) {
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
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5"></path>
        <path d="M5.63 7.16l0 .01"></path>
        <path d="M4.06 11l0 .01"></path>
        <path d="M4.63 15.1l0 .01"></path>
        <path d="M7.16 18.37l0 .01"></path>
        <path d="M11 19.94l0 .01"></path>
      </svg>
    </IconSuspense>
  )
}
