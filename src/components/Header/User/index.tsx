// Librarys
import dynamic from 'next/dynamic'
import AntdAvatar from 'antd/lib/avatar'

// Hooks
import useUser from './useUser'

// Interfaces
import { UserProps } from './interfaces'

// Dynamic Components
const FloatMenu = dynamic(() => import('./FloatMenu'))
const Button = dynamic(() => import('@components/Button'))
const UserCircleSolid = dynamic(() => import('@assets/icons/user-circle-solid'))

export default function User({ menuData }: UserProps) {
  const { avatarUrl, isAuthenticated } = useUser()

  if (!isAuthenticated) {
    return (
      <>
        <Button
          title=""
          onClick={menuData.showMenu}
          icon={<UserCircleSolid size="xl" />}
          className="btn-auth py-2.5 bg-transparent !px-3 text-gray-600 dark:text-gray-400"
        />

        <FloatMenu {...menuData} />
      </>
    )
  }

  return (
    <>
      <AntdAvatar
        size="large"
        alt="user-profile-photo"
        onClick={menuData.showMenu}
        className="user-profile-photo !bg-main-700 z-20 border-2 border-gray-400 dark:border-gray-700 h-[40px] w-[40px] ms-1.5 me-3"
        src={avatarUrl as string}
      />

      <FloatMenu {...menuData} />
    </>
  )
}
