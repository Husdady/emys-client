// Layouts
import MainLayout from '@root/src/layouts/MainLayout'
import AuthLayout from '@layouts/AuthLayouts/AuthLayout'

// Components
import VerifiedEmail from '@modules/Auth/components/VerifiedEmail'

// Types
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

// Interfaces
import { LoaderResponse } from '@config/global-interfaces'

// Loaders
import verifyAccount from '@modules/Auth/loaders/verify-account'

export default function VerifyAccountPage() {
  return (
    <MainLayout>
      <AuthLayout>
        <VerifiedEmail />
      </AuthLayout>
    </MainLayout>
  )
}

/**
 * Validates token for verify user account
 * @param {GetServerSidePropsContext} context Context
 * @returns {Promise<GetServerSidePropsResult<LoaderResponse>>} Data
 */
export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<LoaderResponse>> {
  return verifyAccount(context)
}