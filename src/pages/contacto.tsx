// Components
import MainContainer from '@components/MainContainer'

// Routes
import DashboardRoute from '@routes/DashboardRoute'

// Layouts
import MainLayout from '@layouts/MainLayout'
import ContactLayout from '@layouts/PageLayouts/ContactLayout'

export default function ContactPage() {
  return (
    <DashboardRoute>
      <MainContainer>
        <MainLayout>
          <ContactLayout />
        </MainLayout>
      </MainContainer>
    </DashboardRoute>
  )
}
