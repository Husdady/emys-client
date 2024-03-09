// Routes
import AuthRoute from '@root/src/routes/AuthRoute/AuthRoute'

// Types
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

// Interfaces
import { LoaderResponse } from '@config/globalInterfaces'

// Layouts
import MainLayout from '@layouts/MainLayout'
import AuthLayout from '@layouts/AuthLayouts/AuthLayout'
import ResetPasswordLayout from '@layouts/AuthLayouts/ResetPasswordLayout'

// Loaders
import validateToken from '@modules/Auth/loaders/validate-token'

export default function NewPasswordPage(props: LoaderResponse) {
  return (
    <AuthRoute>
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
