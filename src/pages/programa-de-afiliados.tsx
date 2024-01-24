// Components
import MainContainer from '@components/MainContainer'

// Routes
import DashboardRoute from '@routes/DashboardRoute'

// Layouts
import MainLayout from '@layouts/MainLayout'
import MembershipLayout from '@layouts/PageLayouts/MembershipLayout'

export default function MembershipPage() {
  return (
    <DashboardRoute>
      <MainContainer>
        <MainLayout>
          <MembershipLayout />
        </MainLayout>
      </MainContainer>
    </DashboardRoute>
  )
}
