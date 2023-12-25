// Librarys
import { memo } from 'react'

// Components
import Avatar from '@components/Avatar'

// Hooks
import useUserProfilePhoto from './useUserProfilePhoto'

// Interfaces
import { StaticImageData } from 'next/image'

function UserProfilePhoto() {
  const { src, onOpen } = useUserProfilePhoto()
  return <Avatar src={src as string|StaticImageData} onOpen={onOpen} />
}

export default memo(UserProfilePhoto)
