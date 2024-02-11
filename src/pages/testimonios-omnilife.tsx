// Containers
import LinearBackgroundContainer from '@containers/LinearBackgroundContainer'

// Routes
import DashboardRoute from '@routes/DashboardRoute'

// Layouts
import MainLayout from '@layouts/MainLayout'
import TestimonialsLayout from '@layouts/PageLayouts/TestimonialsLayout'

export default function OmnilifeTestimonialsPage() {
  return (
    <DashboardRoute>
      <LinearBackgroundContainer className="omnilife-testimonials-page">
        <MainLayout>
          <TestimonialsLayout />
        </MainLayout>
      </LinearBackgroundContainer>
    </DashboardRoute>
  )
}
