/* eslint-disable @typescript-eslint/no-misused-promises */
import Note from '@modules/Auth/components/Note'
import Message from '@modules/Auth/components/Message'
import BackToLogin from '@modules/Auth/components/BackToLogin'

// Interfaces
import { OnlyMessageProp } from '@config/interfaces'

// Constants
import { succesMessageProps } from '@modules/Auth/components/Message/constants'

export default function Email({ message }: OnlyMessageProp) {
  return (
    <div className="gap-y-5">
      <Message value={message} {...succesMessageProps} />

      <Note value="Te hemos proveido el correo electrónico con el cuál te registraste. Te recomendamos que lo guardes en un lugar seguro y procures usar algún servicio externo para prevenir olvidarte de tus datos personales." />

      <BackToLogin />
    </div>
  )
}
