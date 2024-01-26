// Components
import LinearBackgroundContainer from '@containers/LinearBackgroundContainer'

// Routes
import DashboardRoute from '@routes/DashboardRoute'

// Layouts
import MainLayout from '@layouts/MainLayout'
import AccountLayout from '@layouts/PageLayouts/AccountLayout'

export default function AccountPage() {
  return (
    <DashboardRoute>
      <LinearBackgroundContainer>
        <MainLayout>
          <AccountLayout />
        </MainLayout>
      </LinearBackgroundContainer>
    </DashboardRoute>
  )
}
