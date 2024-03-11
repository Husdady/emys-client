// Types
import type { GetServerSidePropsResult } from 'next'

// Interfaces
import { LoaderResponse } from '@config/interfaces'

// Constants
import { HOME_PATH } from './paths'

export const DEFAULT_LOADER_RESPONSE: GetServerSidePropsResult<LoaderResponse> = {
  props: { apiResponse: {} },
  redirect: {
    permanent: true,
    destination: HOME_PATH
  }
}
