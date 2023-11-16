// Components
import Key from '@assets/icons/key'
import LockOpen from '@assets/icons/lock-open'
import BrandGmail from '@assets/icons/brand-gmail'
import UserCircleRegular from '@assets/icons/user-circle-regular'

// Interfaces
import { InputLabelProps } from '@components/InputLabel/interfaces'

// Constants
import { defaultIconProps } from '@components/InputLabel'

const labels: Record<string, InputLabelProps> = {
  // Label for fullname field
  fullname: {
    title: 'Nombre y Apellidos',
    icon: <UserCircleRegular {...defaultIconProps} />
  },

  // Label for email field
  email: {
    icon: <BrandGmail {...defaultIconProps} />,
    title: 'Correo electrónico'
  },

  // Label for password field
  password: {
    icon: <Key {...defaultIconProps} />,
    title: 'Contraseña'
  },

  // Label for confirmPassword field
  confirmPassword: {
    icon: <LockOpen {...defaultIconProps} />,
    title: 'Confirmar contraseña'
  }
}

export default labels
