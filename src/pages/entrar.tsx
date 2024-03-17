// Routes
import AuthRoute from '@routes/AuthRoute'

// Components
import Metadata from '@modules/Auth/components/Metadata/Login'

// Layouts
import MainLayout from '@layouts/MainLayout'
import AuthLayout from '@layouts/AuthLayouts/AuthLayout'
import LoginLayout from '@layouts/AuthLayouts/LoginLayout'

export default function LoginPage() {
  return (
    <AuthRoute>
      <Metadata />

      <MainLayout isShowingFloatButtons>
        <AuthLayout containerClassName="min-h-[500px]">
          <LoginLayout />
        </AuthLayout>
      </MainLayout>
    </AuthRoute>
  )
}
