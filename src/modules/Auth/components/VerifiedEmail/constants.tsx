// Components
import X from '@assets/icons/x'
import AlertCircle from '@assets/icons/alert-circle'

// Interfaces
import { WrongVerificationProps } from './interfaces'

// Constants
import { WARNING_STATUS } from '@libs/axios/status'

export const TIMES_FOR_REQUEST = 3

export const loaderStyle = {
  height: '300px',
  minHeight: '300px'
}

export const NOTE_MESSAGE =
  'Al parecer, existe un problema al verificar tu cuenta. Tal vez sea porque la verificación ya caducó o algún otro problema. Pero no te preocupes, envia una solicitud a tu correo electrónico para verificarlo'

export const WARNING_MESSAGE =
  'Al parecer, existe un problema al verificar tu cuenta. Tal vez sea porque la verificación ya caducó o algún otro problema. Si tu cuenta no ha sido verificada correctamente, te recomendamos que inicies sesión y en el apartado de Ajutes, verifiques tu cuenta.'

export const WarningIcon = (
  <AlertCircle className="table text-white rounded-full p-1 border-4 mx-auto stroke-3 bg-yellow-600/80 border-yellow-700/30 dark:bg-yellow-500/80 border-yellow-400/70 hover:cursor-default" />
)

export const CloseIcon = (
  <X className="table text-white rounded-full p-1 border-4 mx-auto stroke-3 bg-red-700/80 border-red-800/70 dark:bg-pink-400/90 dark:border-gray-700/70 hover:cursor-default" />
)

export const getVerificationMessageProps = (status: WrongVerificationProps['status']) => ({
  customValue: { className: 'text-gray-700' },
  icon: status === WARNING_STATUS ? WarningIcon : CloseIcon
})
