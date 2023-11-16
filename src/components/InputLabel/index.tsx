// Librarys
import React from 'react'

// Interfaces
import { InputLabelProps } from './interfaces'
import { IconProps } from '@components/Icon/interfaces'

// Utils
import classnames from '@utils/classnames'
import isUndefined from '@utils/isUndefined'

export const defaultIconProps: IconProps = {
  size: 'sm',
  className: 'hover:cursor-default'
}

const InputLabel: React.FC<InputLabelProps> = ({
  id,
  title,
  icon,
  style,
  className
}: InputLabelProps) => {
  // Definir clases del label
  const labelClasses = React.useMemo(() => {
    return classnames([
      className,
      icon === null || isUndefined(icon) ? 'block' : 'flex items-center',
      'mb-[0.35rem] text-[0.9rem] flex gap-x-1 font-bold select-text text-gray-600 dark:text-gray-400'
    ])
  }, [icon, className])

  if (isUndefined(title)) return null

  return (
    <label id={id} style={style} className={labelClasses}>
      {icon}
      <span className="hover:cursor-text leading-tight">{title}</span>
    </label>
  )
}

export default React.memo(InputLabel)
