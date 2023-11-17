// Layouts
import MainLayout from '@layouts/MainLayout'
import AuthLayout from '@root/src/layouts/AuthLayouts/AuthLayout'
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
