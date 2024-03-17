// Routes
import AuthRoute from '@routes/AuthRoute'

// Components
import Metadata from '@modules/Auth/components/Metadata/ForgotEmail'

// Layouts
import MainLayout from '@layouts/MainLayout'
import AuthLayout from '@layouts/AuthLayouts/AuthLayout'
import ForgotEmailLayout from '@layouts/AuthLayouts/ForgotEmailLayout'

export default function ForgotEmailPage() {
  return (
    <AuthRoute>
      <Metadata />

      <MainLayout>
        <AuthLayout>
          <ForgotEmailLayout />
        </AuthLayout>
      </MainLayout>
    </AuthRoute>
  )
}
