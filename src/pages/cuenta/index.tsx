// Components
import Metadata from '@modules/Account/components/Metadata'
import LinearBackgroundContainer from '@containers/LinearBackgroundContainer'

// Routes
import SessionRoute from '@routes/SessionRoute'

// Layouts
import MainLayout from '@layouts/MainLayout'
import AccountLayout from '@layouts/PageLayouts/AccountLayout'

export default function AccountPage() {
  return (
    <SessionRoute>
      <Metadata />

      <LinearBackgroundContainer>
        <MainLayout>
          <AccountLayout />
        </MainLayout>
      </LinearBackgroundContainer>
    </SessionRoute>
  )
}
