// Layouts
import MainLayout from '@root/src/layouts/MainLayout'
import AuthLayout from '@layouts/AuthLayouts/AuthLayout'
import ForgotPasswordLayout from '@layouts/AuthLayouts/ForgotPasswordLayout'

export default function ForgotPasswordPage() {
  return (
    <MainLayout>
      <AuthLayout>
        <ForgotPasswordLayout />
      </AuthLayout>
    </MainLayout>
  )
}
