// Containers
import MainButtonsContainer from '@containers/MainButtonsContainer'

// Components
import BackButton from '@components/BackButton'
import ReloadProducts from '@modules/Products/components/ReloadProducts'
import ProductsPagination from '@modules/Products/components/ProductsPagination'

// Constants
import { HOME_PATH } from '@data/paths'

export default function ProductsLayout() {
  return (
    <section className="products-layout mt-2 pb-6">
      <MainButtonsContainer>
        <BackButton path={HOME_PATH} title="Volver al Inicio" />
        <ReloadProducts />
      </MainButtonsContainer>

      <ProductsPagination />
    </section>
  )
}
