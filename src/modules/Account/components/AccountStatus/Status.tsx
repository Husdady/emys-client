// Components
import Tag from '@components/Tag'

// Hooks
import { useMemo } from 'react'
import useAuth from '@hooks/useAuth'

// Utils
import classnames from '@utils/classnames'
import isUndefined from '@utils/isUndefined'

// Constants
import allowedStatus from './allowedStatus'

export default function Status() {
  const auth = useAuth()

  // Define props of component
  const tagProps = useMemo(() => {
    if (auth.user === null) return undefined
    return allowedStatus[auth.user.status]
  }, [auth.user?.status])

  if (auth.user === null) return null

  // Account Status not exists
  if (isUndefined(tagProps)) return null

  return <Tag {...tagProps} className={classnames(['account-status', tagProps.className])} />
}
