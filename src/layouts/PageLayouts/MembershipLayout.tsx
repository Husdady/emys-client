// Containers
import BoxContainer from '@containers/BoxContainer'

// Components
import BackButton from '@components/BackButton'
import AffiliateProgram from '@modules/Membership/components/AffiliateProgram'
import AffiliateAsCustomer from '@modules/Membership/components/AffiliateAsCustomer'
import AffiliateAsEntrepeuner from '@modules/Membership/components/AffiliateAsEntrepeuner'

// Constants
import { HOME_PATH } from '@data/paths'

export default function MembershipLayout() {
  return (
    <BoxContainer className="membership">
      <BackButton path={HOME_PATH} title="Volver al Inicio" className="max-w-[175px]" />
      <AffiliateAsCustomer />
      <AffiliateAsEntrepeuner />
      <AffiliateProgram />
    </BoxContainer>
  )
}
