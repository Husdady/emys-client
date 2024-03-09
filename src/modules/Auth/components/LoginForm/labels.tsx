// Components
import Key from '@components/Icons/Key'
import BrandGmail from '@components/Icons/BrandGmail'

// Interfaces
import { InputLabelProps } from '@components/InputLabel/interfaces'

// Constants
import { defaultIconProps } from '@components/InputLabel/constants'

const labels: Record<string, InputLabelProps> = {
  password: { icon: <Key {...defaultIconProps} />, title: 'Contraseña' },
  email: {
    icon: <BrandGmail {...defaultIconProps} />,
    title: 'Correo electrónico'
  }
}

export default labels
