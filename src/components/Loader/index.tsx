// Hooks
import classnames from '@utils/classnames'
import { useMemo } from 'react'

// Interfaces
import { LoaderProps } from './interfaces'

export default function Loader({ style, height, className }: LoaderProps) {
  // Create Component styles
  const loaderStyle = useMemo(
    () => ({
      height: height,
      minHeight: height,
      ...style
    }),
    []
  )

  return (
    <div
      style={loaderStyle}
      className={classnames([className, 'min-h-[100vh] flex items-center justify-center w-full'])}
    >
      <div className="comp-loader" />
    </div>
  )
}
