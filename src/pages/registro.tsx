// Routes
import AuthRoute from '@routes/AuthRoute'

// Layouts
import MainLayout from '@layouts/MainLayout'
import AuthLayout from '@layouts/AuthLayouts/AuthLayout'
import RegisterLayout from '@layouts/AuthLayouts/RegisterLayout'

export default function RegisterPage() {
  return (
    <AuthRoute>
      <MainLayout>
        <AuthLayout>
          <RegisterLayout />
        </AuthLayout>
      </MainLayout>
    </AuthRoute>
  )
}
