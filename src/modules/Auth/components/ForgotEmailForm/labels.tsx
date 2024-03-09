// Components
import Key from '@components/Icons/Key'
import ShieldLock from '@components/Icons/ShieldChevron'

// Interfaces
import { InputLabelProps } from '@components/InputLabel/interfaces'

// Constants
import { defaultIconProps } from '@components/InputLabel'

const labels: Record<string, InputLabelProps> = {
  // Label for code field
  code: {
    icon: <ShieldLock {...defaultIconProps} />,
    title: 'Ingresa tu código personal'
  },

  secretKey: {
    icon: <Key {...defaultIconProps} />,
    title: 'Ingresa tu clave secreta'
  }
}

export default labels
