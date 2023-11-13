// Interfaces
import { HighlightedProps } from './interfaces'

export default function Highlighted({ value, withoutQuots }: HighlightedProps) {
  return (
    <span className="text-main-700 dark:text-main-200 font-semibold">
      {withoutQuots === true ? value : `"${value}"`}
    </span>
  )
}
