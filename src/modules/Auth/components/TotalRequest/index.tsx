// Interfaces
import { TotalRequestProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

export default function TotalRequest({
  className,
  maxRequest,
  requestLimit,
  timesRequested
}: TotalRequestProps) {
  if (requestLimit || timesRequested === 0) return null

  return (
    <span
      className={classnames([
        className,
        'block font-semibold font-lato text-blue-600 leading-tight tracking-tight px-4 text-[0.80rem] mt-2'
      ])}
    >
      *Se ha solicitado {timesRequested}{' '}
      {timesRequested === 1
        ? 'vez. Te queda solamente una solicitud para enviar*'
        : `veces. Te quedan un total de ${maxRequest - timesRequested} solicitudes para enviar*`}
      .
    </span>
  )
}
