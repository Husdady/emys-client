// Layouts
import MainLayout from '@layouts/MainLayout'
import AuthLayout from '@layouts/AuthLayouts/AuthLayout'
import LoginLayout from '@layouts/AuthLayouts/LoginLayout'

export default function LoginPage() {
  return (
    <MainLayout isShowingFloatButtons>
      <AuthLayout containerClassName="min-h-[500px]">
        <LoginLayout />
      </AuthLayout>
    </MainLayout>
  )
}
