// Containers
import LinearBackgroundContainer from '@containers/LinearBackgroundContainer'

// Layouts
import MainLayout from '@layouts/MainLayout'
import ProductLayout from '@layouts/PageLayouts/ProductLayout'

export default function ProductPage() {
  return (
    <LinearBackgroundContainer className="product-page">
      <MainLayout>
        <ProductLayout />
      </MainLayout>
    </LinearBackgroundContainer>
  )
}
