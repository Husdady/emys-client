// Layouts
import MainLayout from '@layouts/MainLayout'
import AuthLayout from '@root/src/layouts/AuthLayouts/AuthLayout'
import ForgotEmailLayout from '@layouts/AuthLayouts/ForgotEmailLayout'

export default function ForgotEmailPage() {
  return (
    <MainLayout>
      <AuthLayout>
        <ForgotEmailLayout />
      </AuthLayout>
    </MainLayout>
  )
}
