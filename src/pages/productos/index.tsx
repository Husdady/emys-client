// Containers
import Metadata from '@modules/Products/components/Metadata/Products'
import LinearBackgroundContainer from '@containers/LinearBackgroundContainer'

// Layouts
import MainLayout from '@layouts/MainLayout'
import ProductsLayout from '@layouts/PageLayouts/ProductsLayout'

export default function ProductsPage() {
  return (
    <LinearBackgroundContainer className="products-page">
      <Metadata />

      <MainLayout>
        <ProductsLayout />
      </MainLayout>
    </LinearBackgroundContainer>
  )
}
