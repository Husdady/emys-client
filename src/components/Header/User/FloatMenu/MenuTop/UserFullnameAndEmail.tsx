// Librarys
import { memo } from 'react'

// Hooks
import useAuth from '@hooks/useAuth'

function UserFullnameAndEmail() {
  const { user } = useAuth()

  if (user === null) return null

  return (
    <div className="user-information tracking-wide truncate">
      <h3 className="user-fullname font-bold font-poppins text-md leading-tight dark:font-normal dark:text-gray-200 truncate">
        {user.fullname.split(' ').slice(0, 2).join(' ')}
      </h3>

      <span className="user-email font-poppins text-gray-500 text-[0.8rem] dark:text-gray-300/80">
        {user.email}
      </span>
    </div>
  )
}

export default memo(UserFullnameAndEmail)
