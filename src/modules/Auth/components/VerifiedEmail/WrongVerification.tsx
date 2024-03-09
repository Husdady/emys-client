/* eslint-disable @typescript-eslint/no-misused-promises */
// Components
import Mail from '@components/Icons/Mail'
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
import { WARNING_STATUS } from '@libs/axios/status'
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
      <Note value={status !== WARNING_STATUS ? NOTE_MESSAGE : WARNING_MESSAGE} />

      <div className="flex flex-col gap-y-2">
        {status !== WARNING_STATUS && (
          <>
            <SubmitButton
              type="button"
              title="Verificar de nuevo mi cuenta"
              icon={<Mail size="md" className="mr-2" />}
              isShowingSpin={result.isLoading}
              disabled={requestLimit}
              onClick={submit}
            />

            <TotalRequest
              maxRequest={maxRequest}
              timesRequested={timesRequested}
              requestLimit={requestLimit}
            />
          </>
        )}
        <BackToLogin />
      </div>
    </div>
  )
}
