// Components
import MainContainer from '@components/MainContainer'

// Routes
import DashboardRoute from '@routes/DashboardRoute'

// Layouts
import MainLayout from '@layouts/MainLayout'
import AccountLayout from '@layouts/PageLayouts/AccountLayout'

export default function AccountPage() {
  return (
    <DashboardRoute>
      <MainContainer>
        <MainLayout>
          <AccountLayout />
        </MainLayout>
      </MainContainer>
    </DashboardRoute>
  )
}
