// Containers
import LinearBackgroundContainer from '@containers/LinearBackgroundContainer'

// Routes
import DashboardRoute from '@routes/DashboardRoute'

// Layouts
import MainLayout from '@layouts/MainLayout'
import ContactLayout from '@layouts/PageLayouts/ContactLayout'

export default function ContactPage() {
  return (
    <DashboardRoute>
      <LinearBackgroundContainer>
        <MainLayout>
          <ContactLayout />
        </MainLayout>
      </LinearBackgroundContainer>
    </DashboardRoute>
  )
}
