// Components
import MainContainer from '@components/MainContainer'

// Layouts
import MainLayout from '@layouts/MainLayout'
import AccountLayout from '@layouts/PageLayouts/AccountLayout'

export default function AccountPage() {
  return (
    <MainContainer>
      <MainLayout>
        <AccountLayout />
      </MainLayout>
    </MainContainer>
  )
}
