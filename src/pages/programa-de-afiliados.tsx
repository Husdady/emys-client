// Containers
import LinearBackgroundContainer from '@containers/LinearBackgroundContainer'

// Routes
import DashboardRoute from '@routes/DashboardRoute'

// Layouts
import MainLayout from '@layouts/MainLayout'
import MembershipLayout from '@layouts/PageLayouts/MembershipLayout'

export default function MembershipPage() {
  return (
    <DashboardRoute>
      <LinearBackgroundContainer>
        <MainLayout>
          <MembershipLayout />
        </MainLayout>
      </LinearBackgroundContainer>
    </DashboardRoute>
  )
}
