/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import { memo, useRef } from 'react'

// Components
import Mail from '@components/Icons/Mail'
import Note from '@modules/Auth/components/Note'
import Message from '@modules/Auth/components/Message'
import SubmitButton from '@components/SubmitButton'

// Interfaces
import { VerificationSendedProps } from './interfaces'

// Constants
// Constants
import { NOTE_MESSAGE } from './constants'
import { succesMessageProps } from '@modules/Auth/components/Message/constants'

const VerificationSended = ({
  message,
  isLoading,
  sendAgainVerification
}: VerificationSendedProps) => {
  const value = useRef(message)

  return (
    <div className="flex flex-col gap-y-5">
      <Message value={value.current} {...succesMessageProps} />
      <Note value={NOTE_MESSAGE} />

      <SubmitButton
        type="button"
        title="Solicitar nueva verificación"
        icon={<Mail size="sm" className="mr-1" />}
        onClick={sendAgainVerification}
        isShowingSpin={isLoading}
      />
    </div>
  )
}

export default memo(VerificationSended, (prevProps, nextProps) => {
  return prevProps.isLoading === nextProps.isLoading
})
