// Routes
import AuthRoute from '@routes/AuthRoute'

// Layouts
import MainLayout from '@root/src/layouts/MainLayout'
import AuthLayout from '@layouts/AuthLayouts/AuthLayout'
import ForgotEmailLayout from '@layouts/AuthLayouts/ForgotEmailLayout'

export default function ForgotEmailPage() {
  return (
    <AuthRoute>
      <MainLayout>
        <AuthLayout>
          <ForgotEmailLayout />
        </AuthLayout>
      </MainLayout>
    </AuthRoute>
  )
}
