// Containers
import BoxContainer from '@containers/BoxContainer'

// Components
import AffiliateProgram from '@modules/Membership/components/AffiliateProgram'
import AffiliateAsCustomer from '@modules/Membership/components/AffiliateAsCustomer'
import AffiliateAsEntrepeuner from '@modules/Membership/components/AffiliateAsEntrepeuner'

export default function MembershipLayout() {
  return (
    <BoxContainer className="membership">
      <AffiliateAsCustomer />
      <AffiliateAsEntrepeuner />
      <AffiliateProgram />
    </BoxContainer>
  )
}
