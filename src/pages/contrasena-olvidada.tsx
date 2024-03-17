// Routes
import AuthRoute from '@routes/AuthRoute'

// Components
import Metadata from '@modules/Auth/components/Metadata/ForgotPassword'

// Layouts
import MainLayout from '@layouts/MainLayout'
import AuthLayout from '@layouts/AuthLayouts/AuthLayout'
import ForgotPasswordLayout from '@layouts/AuthLayouts/ForgotPasswordLayout'

export default function ForgotPasswordPage() {
  return (
    <AuthRoute>
      <Metadata />

      <MainLayout>
        <AuthLayout>
          <ForgotPasswordLayout />
        </AuthLayout>
      </MainLayout>
    </AuthRoute>
  )
}
