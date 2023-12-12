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

  if (children === null || isUndefined(children)) return null

  return (
    <div
      {...props}
      title={title}
      onClick={onClick}
      style={iconStyle}
      className={classnames([
        'icon select-none',
        size,
        className,
        useHoverEffect === true
          ? 'rounded-full hover-transition hover:cursor-pointer hover:bg-opacity-20 dark:hover:after:!bg-opacity-30'
          : null
      ])}
    >
      {children}
    </div>
  )
}

export default memo(Icon)
