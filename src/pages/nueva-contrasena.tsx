// Routes
import AuthRoute from '@routes/AuthRoute'

// Components
import Metadata from '@modules/Auth/components/Metadata/NewPassword'

// Types
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

// Interfaces
import { LoaderResponse } from '@config/interfaces'

// Layouts
import MainLayout from '@layouts/MainLayout'
import AuthLayout from '@layouts/AuthLayouts/AuthLayout'
import ResetPasswordLayout from '@layouts/AuthLayouts/ResetPasswordLayout'

// Loaders
import validateToken from '@modules/Auth/loaders/validateToken'

export default function NewPasswordPage(props: LoaderResponse) {
  return (
    <AuthRoute>
      <Metadata />

      <MainLayout>
        <AuthLayout>
          <ResetPasswordLayout {...props} />
        </AuthLayout>
      </MainLayout>
    </AuthRoute>
  )
}

/**
 * Validates token for reset the password of a user
 * @param {GetServerSidePropsContext} context Context
 * @returns {Promise<GetServerSidePropsResult<LoaderResponse>>} Data
 */
export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<LoaderResponse>> {
  return validateToken(context)
}
