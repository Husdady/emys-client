// Components
import IconSuspense from '@components/Icon/IconSuspense'

// Type
import type { IconSvgProps } from '@components/Icon/types'

export default function ReportMedical(props: IconSvgProps) {
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
        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="2" />
        <line x1="10" y1="14" x2="14" y2="14" />
        <line x1="12" y1="12" x2="12" y2="16" />
      </svg>
    </IconSuspense>
  )
}
