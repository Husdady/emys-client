// Components
import Button from '@components/Button'
import Tooltip from '@components/Tooltip'
import BrandWhatsapp from '@components/Icons/BrandWhatsapp'

// Hooks
import useShowContactWhatsappModal from './useShowContactWhatsappModal'

// Interfaces
import { OnlyClassNameProp } from '@config/globalInterfaces'

// Utils
import classnames from '@utils/classnames'

export default function WhatsappButton({ className }: OnlyClassNameProp) {
  const show = useShowContactWhatsappModal()

  return (
    <Tooltip trigger={['hover']} title="Haz click para mostrar los números disponibles de Whatsapp">
      <Button
        title=""
        onClick={show}
        icon={<BrandWhatsapp size="sm" />}
        className={classnames([
          className,
          'btn-float-whatsapp rounded-full !w-[1.65rem] !h-[1.65rem] !p-0 bg-lime-500 text-white dark:bg-lime-400 border-2 border-lime-600 dark:border-lime-100 dark:text-lime-900'
        ])}
      />
    </Tooltip>
  )
}
