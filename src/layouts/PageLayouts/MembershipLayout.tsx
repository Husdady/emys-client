// Containers
import BoxContainer from '@containers/BoxContainer'

// Components
import BackToHome from '@components/BackButton/components/BackToHome'
import AffiliateProgram from '@modules/Membership/components/AffiliateProgram'
import AffiliateAsCustomer from '@modules/Membership/components/AffiliateAsCustomer'
import AffiliateAsEntrepeuner from '@modules/Membership/components/AffiliateAsEntrepeuner'

export default function MembershipLayout() {
  return (
    <BoxContainer className="membership">
      <BackToHome />
      <AffiliateAsCustomer />
      <AffiliateAsEntrepeuner />
      <AffiliateProgram />
    </BoxContainer>
  )
}
