// Librarys
import dynamic from 'next/dynamic'
import AntdAvatar from 'antd/lib/avatar'

// Hooks
import useUser from './useUser'

// Interfaces
import { UserProps } from './interfaces'
import classnames from '@root/src/utils/classnames'

// Dynamic Components
const FloatMenu = dynamic(() => import('./FloatMenu'))
const Button = dynamic(() => import('@components/Button'))
const UserCircleSolid = dynamic(() => import('@assets/icons/user-circle-solid'))

export default function User({ menuData, className }: UserProps) {
  const { user, avatarUrl, isTabletScreen, isAuthenticated } = useUser()

  if (!isAuthenticated) {
    return (
      <>
        <Button
          title=""
          onClick={menuData.showMenu}
          icon={<UserCircleSolid size="xl" />}
          className={classnames([
            className,
            'btn-auth py-2.5 bg-transparent !px-3 text-gray-600 dark:text-gray-400'
          ])}
        />

        <FloatMenu {...menuData} />
      </>
    )
  }

  return (
    <>
      <article
        role="button"
        onClick={menuData.showMenu}
        className="user-avatar-container flex items-center truncate max-w-[250px] py-1 pr-1 mr-3 gap-x-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <AntdAvatar
          size="large"
          alt="user-profile-photo"
          src={avatarUrl as string}
          onClick={menuData.showMenu}
          className={classnames([
            className,
            'user-profile-photo !bg-main-700 z-20 border-2 border-gray-400 dark:border-gray-700 h-[40px] w-[40px] min-w-[40px] min-h-[40px] ms-1.5'
          ])}
        />

        {!isTabletScreen && (
          <div className="flex flex-col truncate leading-snug">
            <span className="font-semibold truncate block dark:font-normal">{user?.fullname}</span>
            <span className="truncate block text-[0.8rem] dark:text-gray-300">{user?.email}</span>
          </div>
        )}
      </article>

      <FloatMenu {...menuData} />
    </>
  )
}
