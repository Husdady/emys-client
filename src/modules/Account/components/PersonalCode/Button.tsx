/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import dynamic from 'next/dynamic'

// Components
import Mail from '@assets/icons/mail'

// Hooks
import useRequestMyCode from './useRequestMyCode'

// Lazy Components
const Button = dynamic(() => import('@components/Button'))
const TotalRequest = dynamic(() => import('@modules/Auth/components/TotalRequest'))

export default function RequestCode() {
  const { request, isLoading, timesRequested, maxRequest, requestLimit } = useRequestMyCode()

  return (
    <>
      <Button
        onClick={request}
        isShowingSpin={isLoading}
        disabled={requestLimit}
        icon={<Mail size="sm" />}
        title="Solicitar mi código"
        loadingTitle="Solicitando código..."
        className="!px-4 !py-3 ml-auto text-white bg-blue-500 hover:bg-sky-500 dark:bg-sky-200 dark:hover:opacity-60 dark:text-sky-900 rounded-xl dark:font-semibold"
        titlePopup={
          requestLimit
            ? 'Has llegado al límite de solicitudes'
            : 'Enviar mi código personal a mi correo electrónico'
        }
      />

      <TotalRequest
        maxRequest={maxRequest}
        requestLimit={requestLimit}
        timesRequested={timesRequested}
        className="!pr-0 text-right"
      />
    </>
  )
}
