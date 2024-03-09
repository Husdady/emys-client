// Containers
import MainButtonsContainer from '@containers/MainButtonsContainer'

// Components
import BackButton from '@components/BackButton'
import ReloadSellers from '@modules/Sellers/components/ReloadSellers'
import SellersPagination from '@modules/Sellers/components/SellersPagination'

// Constants
import { HOME_PATH } from '@assets/data/paths'

export default function SellersLayout() {
  return (
    <section className="sellers mt-2 pb-6">
      <MainButtonsContainer>
        <BackButton path={HOME_PATH} title="Volver al Inicio" />
        <ReloadSellers />
      </MainButtonsContainer>

      <SellersPagination />
    </section>
  )
}
