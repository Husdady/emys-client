// Librarys
import { Suspense, useMemo } from 'react'

// Components
import Loader from '@components/Loader'

// Hooks
import useValidateLoader from '@hooks/useValidateLoader'
import { useNavigate, useLoaderData } from 'react-router-dom'

// Interfaces
import { APIBadResponse, APIResponse } from '@libs/axios/interfaces'

// Utils
import lazy from '@utils/lazy'
import getQueryParam from '@utils/getQueryParam'
import getAllQueryParams from '@utils/getAllQueryParamsFields'

// Constants
import { loaderStyle } from './constants'

// Lazy Components
const AccountVerified = lazy(() => import('./AccountVerified'))
const WrongVerification = lazy(() => import('./WrongVerification'))

export default function VerfiedEmail() {
  const navigate = useNavigate()
  const loader = useLoaderData() as APIResponse | APIBadResponse

  // Check if needs redirect to Login section
  const redirect = useMemo<boolean>(() => {
    if (getQueryParam('token') === null) return true
    return getAllQueryParams().filter((query) => query !== 'token').length > 0
  }, [])

  // Validate token for verify account
  useValidateLoader({
    loader: loader,
    navigate: navigate,
    showFloatMessages: false,
    redirect: redirect
  })

  if (['error', 'warning'].includes(loader.status as string)) {
    return (
      <Suspense fallback={<Loader style={loaderStyle} />}>
        <WrongVerification
          title={loader.message as string}
          status={loader.status as APIBadResponse['status']}
        />
      </Suspense>
    )
  }

  return (
    <Suspense fallback={<Loader style={loaderStyle} />}>
      <AccountVerified />
    </Suspense>
  )
}
