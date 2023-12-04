// Components
import Tag from '@components/Tag'

// Hooks
import { useMemo } from 'react'
import useAuth from '@hooks/useAuth'

// Utils
import isUndefined from '@utils/isUndefined'

// Constants
import allowedStatus from './allowed-status'

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

  return <Tag {...tagProps} />
}
