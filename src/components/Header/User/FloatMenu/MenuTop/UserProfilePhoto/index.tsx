// Librarys
import { memo } from 'react'

// Components
import Avatar from '@components/Avatar'

// Hooks
import useUserProfilePhoto from './useUserProfilePhoto'

// Interfaces
import { StaticImageData } from 'next/image'
import { UserProfilePhotoProps } from './interfaces'

function UserProfilePhoto(props: UserProfilePhotoProps) {
  const { src, onOpen } = useUserProfilePhoto(props)
  return <Avatar src={src as string|StaticImageData} onOpen={onOpen} />
}

export default memo(UserProfilePhoto)
