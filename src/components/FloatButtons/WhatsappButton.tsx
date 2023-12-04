// Components
import Button from '@components/Button'
import BrandWhatsapp from '@assets/icons/brand-whatsapp'

// Interfaces
import { OnlyClassNameProp } from '@config/global-interfaces'

// Utils
import classnames from '@utils/classnames'

export default function WhatsappButton({ className }: OnlyClassNameProp) {
  return (
    <Button
      title=""
      icon={<BrandWhatsapp size="sm" />}
      className={classnames([
        className,
        'btn-float-whatsapp rounded-full !w-[1.65rem] !h-[1.65rem] !p-0 bg-lime-500 text-white dark:bg-lime-400 border-2 border-lime-600 dark:border-lime-100 dark:text-lime-900'
      ])}
    />
  )
}
