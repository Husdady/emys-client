// Librarys
import dynamic from 'next/dynamic'
import { useMemo } from 'react'

// Components
import Loader from '@components/Loader'

// Hooks
// import useValidateLoader from '@hooks/useValidateLoader'
// import { useNavigate, useLoaderData } from 'react-router-dom'

// Interfaces
import { APIBadResponse, APIResponse } from '@libs/axios/interfaces'

// Utils
// import getQueryParam from '@utils/getQueryParam'
// import getAllQueryParams from '@utils/getAllQueryParamsFields'

// Constants
import { loaderStyle } from './constants'

// Lazy Components
const AccountVerified = dynamic(() => import('./AccountVerified'), {
  loading: () => <Loader style={loaderStyle} />
})
// const WrongVerification = dynamic(() => import('./WrongVerification'))

export default function VerfiedEmail() {
  // const navigate = useNavigate()
  // const loader = useLoaderData() as APIResponse | APIBadResponse

  // Check if needs redirect to Login section
  const redirect = useMemo<boolean>(() => {
    return false
    // if (getQueryParam('token') === null) return true
    // return getAllQueryParams().filter((query) => query !== 'token').length > 0
  }, [])

  // Validate token for verify account
  // useValidateLoader({
  //   loader: loader,
  //   navigate: navigate,
  //   showFloatMessages: false,
  //   redirect: redirect
  // })

  // if (['error', 'warning'].includes(loader.status as string)) {
  //   return (
  //     <Suspense fallback={<Loader style={loaderStyle} />}>
  //       <WrongVerification
  //         title={loader.message as string}
  //         status={loader.status as APIBadResponse['status']}
  //       />
  //     </Suspense>
  //   )
  // }

  return <AccountVerified />
}
