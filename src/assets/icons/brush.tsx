// Components
import IconSuspense from '@components/Icon/IconSuspense'

// Type
import type { IconSvgProps } from '@components/Icon/types'

export default function Brush(props: IconSvgProps) {
  return (
    <IconSuspense {...props}>
      <svg
        width="24"
        height="24"
        strokeWidth="2"
        fill="currentColor"
        stroke="currentColor"
        viewBox="0 0 384 512"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M162.4 6c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6H48C21.5 0 0 21.5 0 48V224v22.4V256H9.6 374.4 384v-9.6V224 48c0-26.5-21.5-48-48-48H230.5c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
      </svg>
    </IconSuspense>
  )
}
