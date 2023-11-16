// Librarys
import { Suspense } from 'react'

// Components
import Fallback from './Fallback'
import Button from '@components/Button'

// Interfaces
import { SubmitButtonProps } from './types'

// Constants
import { SubmitButtonProps as Props } from './constants'

export default function SubmitButton({
  type = Props.TYPE,
  icon,
  title,
  disabled,
  isShowingSpin,
  onClick,
  loadingTitle
}: SubmitButtonProps) {
  return (
    <Suspense fallback={<Fallback />}>
      <Button
        icon={icon}
        type={type}
        title={title}
        onClick={onClick}
        disabled={disabled}
        isShowingSpin={isShowingSpin}
        loadingTitle={loadingTitle}
        className={Props.CLASSNAME}
        customTitle={Props.CUSTOM_TITLE}
      />
    </Suspense>
  )
}
