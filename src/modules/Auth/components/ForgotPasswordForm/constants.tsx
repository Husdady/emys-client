// Components
import BrandGmail from '@components/Icons/BrandGmail'

// Interfaces
import { InputLabelProps } from '@components/InputLabel/interfaces'

// Constants
import { defaultIconProps } from '@components/InputLabel/constants'

export const NOTE_MESSAGE =
  'Si no has recibido la verificación en tu correo electrónico, prueba solicitando una nueva verificación en el botón de abajo. Se enviará un mensaje a tu correo electrónico, no olvides buscar en la carpeta de SPAM'

export const DEFAULT_VALUES = {
  email: ''
}

export const VERIFICATION = {
  ...DEFAULT_VALUES,
  isSended: false
}

export const label: InputLabelProps = {
  title: 'Correo electrónico',
  icon: <BrandGmail {...defaultIconProps} />
}
