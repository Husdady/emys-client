// Components
import Metadata from '@modules/Membership/components/Metadata'

// Containers
import LinearBackgroundContainer from '@containers/LinearBackgroundContainer'

// Layouts
import MainLayout from '@layouts/MainLayout'
import MembershipLayout from '@layouts/PageLayouts/MembershipLayout'

export default function MembershipPage() {
  return (
    <LinearBackgroundContainer>
      <Metadata />

      <MainLayout>
        <MembershipLayout />
      </MainLayout>
    </LinearBackgroundContainer>
  )
}
