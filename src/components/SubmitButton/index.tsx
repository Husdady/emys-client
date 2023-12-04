// Librarys
import dynamic from 'next/dynamic'

// Components
import Fallback from './Fallback'

// Interfaces
import { SubmitButtonProps } from './types'

// Utils
import classnames from '@utils/classnames'

// Constants
import { SubmitButtonProps as Props } from './constants'

// Dynamic Components
const Button = dynamic(() => import('@components/Button'), { loading: () => <Fallback /> })

export default function SubmitButton({
  type = Props.TYPE,
  icon,
  title,
  onClick,
  disabled,
  className,
  loadingTitle,
  isShowingSpin
}: SubmitButtonProps) {
  return (
    <Button
      icon={icon}
      type={type}
      title={title}
      onClick={onClick}
      disabled={disabled}
      isShowingSpin={isShowingSpin}
      loadingTitle={loadingTitle}
      customTitle={Props.CUSTOM_TITLE}
      className={classnames([className, Props.CLASSNAME])}
    />
  )
}
