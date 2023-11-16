// Librarys
import React from 'react'

// Components
import Eye from '@assets/icons/eye'
import EyeOff from '@assets/icons/eye-off'

// Interfaces
import { EyeProps } from './interfaces'

// Constants
import { iconProps } from './constants'

const InputEye: React.FC<EyeProps> = ({ onShow, onHide, show = true }: EyeProps) => {
  const [showing, setShowing] = React.useState<boolean>(false)

  // Event 'click' on Eye icon
  const handleClick = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation() // Prevent propagate click event to parent

    setShowing((currentState) => {
      currentState ? onHide() : onShow()
      return !currentState
    })
  }, [])

  // Hide Eye icon
  if (!show) return null

  return (
    <div role="button" className="ml-2 eye select-none cursor-pointer" onClick={handleClick}>
      <React.Suspense fallback={null}>
        {showing ? <Eye {...iconProps} /> : <EyeOff {...iconProps} />}
      </React.Suspense>
    </div>
  )
}

export default React.memo(InputEye)
