// Components
import MainContainer from '@components/MainContainer'

// Routes
import DashboardRoute from '@routes/DashboardRoute'

// Layouts
import MainLayout from '@layouts/MainLayout'
import MembershipLayout from '@layouts/PageLayouts/MembershipLayout'

export default function OmnilifeTestimonialsPage() {
  return (
    <DashboardRoute>
      <MainLayout>
        <MembershipLayout />
      </MainLayout>
    </DashboardRoute>
  )
}
