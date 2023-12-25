// Librarys
import { memo } from 'react'
import AntdAvatar from 'antd/lib/avatar'

// Components
import Button from '@components/Button'
import Camera from '@assets/icons/camera'

// Interfaces
import { AvatarProps } from './interfaces'

function Avatar({ src, onOpen }: AvatarProps) {
  return (
    <div className="avatar relative">
      <Button
        title=""
        onClick={onOpen}
        icon={<Camera size="smaller" className="center" />}
        titlePopup="Actualizar mi foto de perfil"
        className="!p-0 !absolute bg-dark-800/50 w-full h-full rounded-full z-50 text-gray-200 dark:bg-dark-800/80 opacity-0 hover:opacity-100 hover:cursor-pointer"
      />

      <AntdAvatar
        size="large"
        alt="user-profile-photo"
        className="!bg-main-700 z-20 border-2 border-gray-400 dark:border-gray-700"
        src={src}
      />
    </div>
  )
}

export default memo(Avatar, (prevProps, nextProps) => {
  return prevProps.src === nextProps.src
})
