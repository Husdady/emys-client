// Components
import Metadata from '@modules/Home/components/Metadata'

// Layouts
import MainLayout from '@layouts/MainLayout'
import HomeLayout from '@layouts/PageLayouts/HomeLayout'

export default function Home() {
  return (
    <MainLayout>
      <Metadata />
      <HomeLayout />
    </MainLayout>
  )
}
