// Librarys
import dynamic from 'next/dynamic'
import AntdAvatar from 'antd/lib/avatar'

// Hooks
import useUser from './useUser'

// Dynamic Components
const Button = dynamic(() => import('@components/Button'))
const UserCircleSolid = dynamic(() => import('@assets/icons/user-circle-solid'))

export default function User() {
  const { avatarUrl, isAuthenticated } = useUser()

  if (!isAuthenticated) {
    return (
      <Button
        title=""
        icon={<UserCircleSolid size="xl" />}
        className="btn-auth py-2.5 bg-transparent !px-3 text-gray-600 dark:text-gray-400"
      />
    )
  }

  return (
    <AntdAvatar
      size="large"
      alt="user-profile-photo"
      className="user-profile-photo !bg-main-700 z-20 border-2 border-gray-400 dark:border-gray-700 h-[32px] w-[32px] ms-1.5 me-3"
      src={avatarUrl as string}
    />
  )
}
