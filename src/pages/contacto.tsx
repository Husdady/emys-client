// Containers
import LinearBackgroundContainer from '@containers/LinearBackgroundContainer'

// Layouts
import MainLayout from '@layouts/MainLayout'
import ContactLayout from '@layouts/PageLayouts/ContactLayout'

export default function ContactPage() {
  return (
    <LinearBackgroundContainer>
      <MainLayout>
        <ContactLayout />
      </MainLayout>
    </LinearBackgroundContainer>
  )
}
