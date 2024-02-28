// Hooks
import useFocus from './useFocus'

// Interfaces
import { OnlyChildrenProp } from '@config/global-interfaces'

export default function Focus({ children }: OnlyChildrenProp) {
  const { divRef } = useFocus()
  return <div ref={divRef}>{children}</div>
}
