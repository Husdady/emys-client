// Interfaces
import { IconProps } from '@components/Icon/interfaces'

// Constants
export const EMAIL = 'email'
export const PASSWORD = 'password'

export const sharedIconProps: IconProps = {
  size: 'sm',
  className: 'text-gray-400 mr-2'
}

export const InputProps = Object.freeze({
  DEFAULT_TYPE: 'text',
  DEFAULT_PLACEHOLDER: 'Escribe algo...',
  DEFAULT_PASSWORD_PLACEHOLDER: 'Ingresa tu contraseña',
  DEFAULT_EMAIL_PLACEHOLDER: 'Ingresa tu correo electrónico',
  DEFAULT_BORDER_COLOR: 'border-blue-400',
  ERROR_TYPE_PASSWORD: "El tipo del input debe ser de tipo 'password'",
  DEFAULT_HIDE_PLACEHOLDER_ON_FOCUS: false,
  DEFAULT_SHOW_PASSWORD: false,
  DEFAULT_SHOW_CLEAR_ICON: false
})
