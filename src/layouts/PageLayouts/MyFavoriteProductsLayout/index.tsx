// Containers
import MainButtonsContainer from '@containers/MainButtonsContainer'

// Components
import BackButton from '@components/BackButton'
import ReloadFavoriteProducts from '@modules/Products/components/ReloadFavoriteProducts'
import FavoriteProductsPagination from '@modules/Products/components/FavoriteProductsPagination'

// Constants
import { HOME_PATH } from '@assets/data/paths'

export default function MyFavoriteProductsLayout() {
  return (
    <section className="my-favorite-products-layout mt-2 pb-6">
      <MainButtonsContainer>
        <BackButton path={HOME_PATH} title="Volver al Inicio" />
        <ReloadFavoriteProducts />
      </MainButtonsContainer>

      <FavoriteProductsPagination />
    </section>
  )
}
