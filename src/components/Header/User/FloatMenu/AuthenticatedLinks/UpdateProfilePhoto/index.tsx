// Librarys
import dynamic from 'next/dynamic'

// Components
import Camera from '@assets/icons/camera'

// Hooks
import useUpdateProfilePhoto from './useUpdateProfilePhoto'

// Interfaces
import { MenuData } from '@components/Header/User/interfaces'

// Dynamic Components
const Button = dynamic(() => import('@components/Button'))

export default function UpdateProfilePhoto(props: MenuData) {
  const { handleShowProfilePhotoModal } = useUpdateProfilePhoto(props)

  return (
    <Button
      icon={<Camera size="md" />}
      title="Actualizar mi foto de perfil"
      onClick={handleShowProfilePhotoModal}
      className="w-full navigation-list-item-link flex items-center !justify-start border-l-[5px] border-transparent py-3.5 sm:py-3 !px-3 sm:!px-3.5 font-semibold tracking-wide md:hover:bg-main-700/10 md:hover:text-main-700 dark:!font-normal dark:md:hover:!font-normal dark:md:hover:bg-main-200/30 dark:md:hover:text-pink-200 whitespace-normal bg-transparent border-b border-b-gray-300 dark:border-b-gray-600"
    />
  )
}
