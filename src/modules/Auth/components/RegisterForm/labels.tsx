// Components
import Key from '@components/Icons/Key'
import LockOpen from '@components/Icons/LockOpen'
import BrandGmail from '@components/Icons/BrandGmail'
import UserCircleRegular from '@components/Icons/UserCircleRegular'

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
