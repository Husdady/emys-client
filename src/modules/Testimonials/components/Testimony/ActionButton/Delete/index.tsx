// Components
import Trash from '@assets/icons/trash'
import Button from '@components/Button'

// Hooks
import useShowModalForDeleteMyTestimony from './useShowModalForDeleteMyTestimony'

// Interfaces
import { ActionButtonProps } from '@modules/Testimonials/components/Testimony/ActionButton/interfaces'

export default function DeleteTestimony({ testimony }: ActionButtonProps) {
  const show = useShowModalForDeleteMyTestimony(testimony)

  return (
    <Button
      onClick={show}
      icon={<Trash size="smd" />}
      title="Eliminar mi Testimonio"
      customTitle={{ className: '!font-lexend' }}
      className="w-full text-red-600 !px-2.5 !py-2 bg-transparent hover:bg-red-100/40 !justify-start dark:text-red-300 dark:hover:bg-red-200/20"
    />
  )
}
