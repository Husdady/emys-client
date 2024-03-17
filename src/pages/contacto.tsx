// Components
import Metadata from '@modules/Contact/components/Metadata'

// Containers
import LinearBackgroundContainer from '@containers/LinearBackgroundContainer'

// Layouts
import MainLayout from '@layouts/MainLayout'
import ContactLayout from '@layouts/PageLayouts/ContactLayout'

export default function ContactPage() {
  return (
    <LinearBackgroundContainer>
      <Metadata />

      <MainLayout>
        <ContactLayout />
      </MainLayout>
    </LinearBackgroundContainer>
  )
}
