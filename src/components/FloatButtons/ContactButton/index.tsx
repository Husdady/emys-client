// Components
import Mail from '@assets/icons/mail'
import Button from '@components/Button'
import Tooltip from '@components/Tooltip'

// Hooks
import useContactButton from './useContactButton'

// Interfaces
import { OnlyClassNameProp } from '@config/global-interfaces'

// Utils
import classnames from '@utils/classnames'

export default function ContactButton({ className }: OnlyClassNameProp) {
  const { show, isContactPage } = useContactButton()

  return (
    <Tooltip
      trigger={['hover']}
      title={isContactPage ? undefined : 'Presiona el botón para abrir el formulario de contacto'}
    >
      <Button
        title=""
        onClick={show}
        disabled={isContactPage}
        icon={<Mail size="sm" />}
        className={classnames([
          className,
          'btn-float-contact rounded-full !w-[1.65rem] !h-[1.65rem] !p-0 bg-sky-500 dark:bg-sky-200 border-2 border-sky-600 dark:border-sky-100 text-white dark:text-sky-900'
        ])}
      />
    </Tooltip>
  )
}
