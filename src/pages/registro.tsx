// Routes
import AuthRoute from '@routes/AuthRoute'

// Components
import Metadata from '@modules/Auth/components/Metadata/Register'

// Layouts
import MainLayout from '@layouts/MainLayout'
import AuthLayout from '@layouts/AuthLayouts/AuthLayout'
import RegisterLayout from '@layouts/AuthLayouts/RegisterLayout'

export default function RegisterPage() {
  return (
    <AuthRoute>
      <Metadata />

      <MainLayout>
        <AuthLayout>
          <RegisterLayout />
        </AuthLayout>
      </MainLayout>
    </AuthRoute>
  )
}
