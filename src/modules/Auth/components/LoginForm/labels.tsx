// Components
import Key from '@components/Icons/Key'
import BrandGmail from '@components/Icons/BrandGmail'

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
