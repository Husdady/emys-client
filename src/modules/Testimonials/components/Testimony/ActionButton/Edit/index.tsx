// Components
import Edit from '@assets/icons/edit'
import Button from '@components/Button'

// Hooks
import useShowModalForEditTestimony from './useShowModalForEditMyTestimony'

// Interfaces
import { ActionButtonProps } from '@modules/Testimonials/components/Testimony/ActionButton/interfaces'

export default function EditTestimony({ testimony }: ActionButtonProps) {
  const show = useShowModalForEditTestimony(testimony)

  return (
    <Button
      onClick={show}
      icon={<Edit size="smd" />}
      title="Editar mi Testimonio"
      customTitle={{ className: '!font-lexend' }}
      className="w-full text-blue-600 !px-2.5 !py-2 bg-transparent hover:bg-blue-100/40 !justify-start dark:text-sky-200 hover:bg-sky-100/40 dark:hover:bg-sky-200/20"
    />
  )
}
