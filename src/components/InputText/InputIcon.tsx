// Librarys
import React from 'react'

// Components
import Mail from '@components/Icons/Mail'
import Lock from '@components/Icons/Lock'

// Types
import type { InputIconProps } from './types'

// Utils
import isUndefined from '@utils/isUndefined'

// Constants
import { EMAIL, PASSWORD, sharedIconProps, InputProps as Props } from './constants'

const InputIcon: React.FC<InputIconProps> = ({
  type = Props.DEFAULT_TYPE,
  icon
}: InputIconProps) => {
  if (icon === null || isUndefined(icon)) return null // Hide icon

  if (![EMAIL, PASSWORD].includes(type)) return <div>{icon}</div> // Show custom icon
  if (type === EMAIL) return <Mail {...sharedIconProps} /> // Show email icon
  if (type === PASSWORD) return <Lock {...sharedIconProps} /> // Show password icon

  return null // Hide icon
}

export default React.memo(InputIcon)
