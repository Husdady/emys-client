// Containers
import LinearBackgroundContainer from '@containers/LinearBackgroundContainer'

// Layouts
import MainLayout from '@layouts/MainLayout'
import ProductsLayout from '@layouts/PageLayouts/ProductsLayout'

export default function ProductsPage() {
  return (
    <LinearBackgroundContainer className="products-page">
      <MainLayout>
        <ProductsLayout />
      </MainLayout>
    </LinearBackgroundContainer>
  )
}
