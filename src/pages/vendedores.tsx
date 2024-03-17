// Components
import Metadata from '@modules/Sellers/components/Metadata'

// Containers
import LinearBackgroundContainer from '@containers/LinearBackgroundContainer'

// Layouts
import MainLayout from '@layouts/MainLayout'
import SellersLayout from '@layouts/PageLayouts/SellersLayout'

export default function SellersPage() {
  return (
    <LinearBackgroundContainer className="sellers-page">
      <Metadata />

      <MainLayout>
        <SellersLayout />
      </MainLayout>
    </LinearBackgroundContainer>
  )
}
