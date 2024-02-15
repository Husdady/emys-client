// Containers
import LinearBackgroundContainer from '@containers/LinearBackgroundContainer'

// Layouts
import MainLayout from '@layouts/MainLayout'
import SellersLayout from '@layouts/PageLayouts/SellersLayout'

export default function OmnilifeTestimonialsPage() {
  return (
    <LinearBackgroundContainer className="sellers-page">
      <MainLayout>
        <SellersLayout />
      </MainLayout>
    </LinearBackgroundContainer>
  )
}
