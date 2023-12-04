// Layouts
import PageLayout from '@layouts/PageLayout'
import MainLayout from '@root/src/layouts/MainLayout'
import AccountLayout from '@layouts/PageLayouts/AccountLayout'

export default function AccountPage() {
  return (
    <PageLayout>
      <MainLayout>
        <AccountLayout />
      </MainLayout>
    </PageLayout>
  )
}
