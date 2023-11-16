/* eslint-disable @typescript-eslint/no-misused-promises */
// Components
import Mail from '@assets/icons/mail'
import Note from '@modules/Auth/components/Note'
import Message from '@modules/Auth/components/Message'
import BackToLogin from '@modules/Auth/components/BackToLogin'
import TotalRequest from '@modules/Auth/components/TotalRequest'
import SubmitButton from '@components/SubmitButton'

// Hooks
import useRequestVerification from '@modules/Auth/hooks/useRequestVerification'

// Interfaces
import { WrongVerificationProps } from './interfaces'

// Constants
import {
  NOTE_MESSAGE,
  WARNING_MESSAGE,
  TIMES_FOR_REQUEST,
  getVerificationMessageProps
} from './constants'

export default function WrongVerification({ status, title }: WrongVerificationProps) {
  const { result, submit, maxRequest, timesRequested, requestLimit } =
    useRequestVerification(TIMES_FOR_REQUEST)

  return (
    <div className="flex flex-col gap-y-5">
      <Message value={title} {...getVerificationMessageProps(status)} />
      <Note value={status !== 'warning' ? NOTE_MESSAGE : WARNING_MESSAGE} />

      <div className="flex flex-col gap-y-2">
        {status !== 'warning' && (
          <SubmitButton
            type="button"
            title="Verificar de nuevo mi cuenta"
            onClick={submit}
            disabled={requestLimit}
            isShowingSpin={result.isLoading}
            icon={<Mail size="md" className="mr-2" />}
          />
        )}

        {status !== 'warning' && (
          <TotalRequest
            maxRequest={maxRequest}
            timesRequested={timesRequested}
            requestLimit={requestLimit}
          />
        )}

        <BackToLogin />
      </div>
    </div>
  )
}
