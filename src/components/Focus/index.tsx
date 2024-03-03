// Hooks
import useFocus from './useFocus'

// Interfaces
import { FocusProps } from './interfaces'

export default function Focus({ children, ...props }: FocusProps) {
  const { divRef } = useFocus(props)
  return <div ref={divRef}>{children}</div>
}
