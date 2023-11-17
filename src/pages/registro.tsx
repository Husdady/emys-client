// Layouts
import MainLayout from '@layouts/MainLayout'
import AuthLayout from '@root/src/layouts/AuthLayouts/AuthLayout'
import RegisterLayout from '@layouts/AuthLayouts/RegisterLayout'

export default function RegisterPage() {
  return (
    <MainLayout>
      <AuthLayout>
        <RegisterLayout />
      </AuthLayout>
    </MainLayout>
  )
}
