// Librarys
import React from 'react'

// Components
import AlertCircle from '@assets/icons/alert-circle'

// Hooks
import useClasses from './useClasses'

// Interfaces
import { InputErrorProps } from './interfaces'

// Utils
import isUndefined from '@utils/isUndefined'

const InputError: React.FC<InputErrorProps> = ({
  value,
  textStyle,
  iconColor,
  containerStyle,
  ...props
}: InputErrorProps) => {
  // Create component classes
  const classes = useClasses(props)

  if (isUndefined(value)) return null

  return (
    <div style={containerStyle} className={classes.container}>
      <React.Suspense>
        <AlertCircle size="sm" color={iconColor} className={classes.icon} />
      </React.Suspense>

      <span style={textStyle} className={classes.error}>
        {value}
      </span>
    </div>
  )
}

export default React.memo(InputError, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value
})
