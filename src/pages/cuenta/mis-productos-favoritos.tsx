// Containers
import LinearBackgroundContainer from '@containers/LinearBackgroundContainer'

// Layouts
import MainLayout from '@layouts/MainLayout'
import MyFavoriteProductsLayout from '@layouts/PageLayouts/MyFavoriteProductsLayout'

export default function MyFavoriteProductsPage() {
  return (
    <LinearBackgroundContainer className="my-favorite-products-page">
      <MainLayout>
        <MyFavoriteProductsLayout />
      </MainLayout>
    </LinearBackgroundContainer>
  )
}
