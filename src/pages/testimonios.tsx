// Containers
import LinearBackgroundContainer from '@containers/LinearBackgroundContainer'

// Layouts
import MainLayout from '@layouts/MainLayout'
import TestimonialsLayout from '@layouts/PageLayouts/TestimonialsLayout'

export default function TestimonialsPage() {
  return (
    <LinearBackgroundContainer className="testimonials-page">
      <MainLayout>
        <TestimonialsLayout />
      </MainLayout>
    </LinearBackgroundContainer>
  )
}
