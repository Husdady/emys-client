// Librarys
import { memo } from 'react'

interface MaskProps {
  onHide?: () => void
}

function Mask({ onHide }: MaskProps) {
  return (
    <div
      role="dialog"
      onClick={onHide}
      className="mask fixed top-0 left-0 z-[9999] w-full h-full cursor-default"
    />
  )
}

export default memo(Mask)
