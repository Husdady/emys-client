// Containers
import MainButtonsContainer from '@containers/MainButtonsContainer'

// Components
import BackButton from '@components/BackButton'
import AddMyTestimony from '@modules/Testimonials/components/AddMyTestimony'
import ReloadTestimonials from '@modules/Testimonials/components/ReloadTestimonials'
import TestimonialsPagination from '@modules/Testimonials/components/TestimonialsPagination'

// Constants
import { HOME_PATH } from '@data/paths'

export default function TestimonialsLayout() {
  return (
    <section className="testimonials mt-2 pb-6">
      <MainButtonsContainer>
        <AddMyTestimony className="order-last sm:order-first" />
        <BackButton path={HOME_PATH} title="Volver al Inicio" />
        <ReloadTestimonials />
      </MainButtonsContainer>

      <TestimonialsPagination />
    </section>
  )
}
