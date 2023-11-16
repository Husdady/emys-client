/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import React from 'react'

// Interfaces
import { MessageProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

const Message: React.FC<MessageProps> = ({
  icon,
  customValue = {},
  value,
  style,
  className
}: MessageProps) => {
  // Configuración del componente
  const message = React.useMemo(
    () => ({
      // Clases del componente
      className: classnames(['flex flex-col gap-y-2', className]),

      // Título del componente
      value: {
        ...customValue,
        className: classnames([
          customValue.className,
          'font-lato font-semibold text-lg leading-tight text-center dark:text-gray-400'
        ])
      }
    }),
    []
  )

  return (
    <div style={style} className={message.className}>
      {icon}
      <h4 {...message.value}>{value}</h4>
    </div>
  )
}

export default React.memo(Message)
