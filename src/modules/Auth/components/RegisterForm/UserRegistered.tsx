/* eslint-disable @typescript-eslint/no-misused-promises */
// Components
import Mail from '@assets/icons/mail'
import Note from '@modules/Auth/components/Note'
import Message from '@modules/Auth/components/Message'
import TotalRequest from '@modules/Auth/components/TotalRequest'
import SubmitButton from '@components/SubmitButton'

// Hooks
import useRequestVerification from '@modules/Auth/hooks/useRequestVerification'

// Interfaces
import { UserRegisteredProps } from './interfaces'

// Constants
import { succesMessageProps } from '@modules/Auth/components/Message/constants'

export default function UserRegistered({ message }: UserRegisteredProps) {
  const { result, submit, maxRequest, timesRequested, requestLimit } = useRequestVerification()

  return (
    <div className="flex flex-col gap-y-3">
      <Message value={message} {...succesMessageProps} />

      <Note
        value="Si no has recibido la verificación en tu correo electrónico, prueba
         solicitando una nueva verificación en el botón de abajo. Se enviará un
         mensaje a tu correo electrónico, no olvides buscar en la carpeta de SPAM"
      />

      <SubmitButton
        type="button"
        title="Solicitar nueva verificación"
        icon={<Mail size="md" className="mr-2" />}
        onClick={submit}
        disabled={requestLimit}
        isShowingSpin={result.isLoading}
      />

      <TotalRequest
        maxRequest={maxRequest}
        timesRequested={timesRequested}
        requestLimit={requestLimit}
      />
    </div>
  )
}
