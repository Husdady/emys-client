// Components
import Lock from '@assets/icons/lock'
import LockOpen from '@assets/icons/lock-open'

// Interfaces
import { InputLabelProps } from '@components/InputLabel/interfaces'

// Constants
import { defaultIconProps } from '@components/InputLabel'

export const passwordLabel: InputLabelProps = {
  icon: <Lock {...defaultIconProps} />,
  title: 'Nueva contraseña'
}

export const confirmPasswordLabel: InputLabelProps = {
  title: 'Confirmar contraseña',
  icon: <LockOpen {...defaultIconProps} />
}
