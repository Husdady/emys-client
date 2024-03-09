// Components
import Lock from '@components/Icons/Lock'
import LockOpen from '@components/Icons/LockOpen'

// Interfaces
import { InputLabelProps } from '@components/InputLabel/interfaces'

// Constants
import { defaultIconProps } from '@components/InputLabel/constants'

export const passwordLabel: InputLabelProps = {
  icon: <Lock {...defaultIconProps} />,
  title: 'Nueva contraseña'
}

export const confirmPasswordLabel: InputLabelProps = {
  title: 'Confirmar contraseña',
  icon: <LockOpen {...defaultIconProps} />
}
