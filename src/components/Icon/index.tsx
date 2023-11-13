// Librarys
import { memo, useMemo } from 'react'

// Interfaces
import { IconProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'
import isUndefined from '@utils/isUndefined'

const Icon = ({
  children,
  color,
  size,
  style,
  className,
  onClick,
  title,
  useHoverEffect,
  ...props
}: IconProps) => {
  // Define styles
  const iconStyle = useMemo(() => ({ ...style, color: color }), [color, style])

  // Define component classes
  const iconClasses = useMemo(
    () =>
      classnames([
        'icon select-none',
        size,
        className,
        useHoverEffect === true
          ? 'rounded-full hover-transition hover:cursor-pointer hover:bg-opacity-20 dark:hover:!bg-opacity-30'
          : null
      ]),
    [size, className]
  )

  // Icon hidden
  if (isUndefined(children) || children === null) return null

  return (
    <div title={title} onClick={onClick} style={iconStyle} className={iconClasses} {...props}>
      {children}
    </div>
  )
}

export default memo(Icon)
