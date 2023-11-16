// Components
import Key from '@assets/icons/key'
import BrandGmail from '@assets/icons/brand-gmail'

// Interfaces
import { defaultIconProps } from '@components/InputLabel'
import { InputLabelProps } from '@components/InputLabel/interfaces'

const labels: Record<string, InputLabelProps> = {
  password: { icon: <Key {...defaultIconProps} />, title: 'Contraseña' },
  email: {
    icon: <BrandGmail {...defaultIconProps} />,
    title: 'Correo electrónico'
  }
}

export default labels
