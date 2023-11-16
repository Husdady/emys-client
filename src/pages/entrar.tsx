// Layouts
import MainLayout from '@layouts/MainLayout'
import AuthLayout from '@root/src/layouts/AuthLayouts/AuthLayout'
import LoginLayout from '@layouts/AuthLayouts/LoginLayout'

export default function LoginPage() {
  return (
    <MainLayout>
      <AuthLayout>
        <LoginLayout />
      </AuthLayout>
    </MainLayout>
  )
}
