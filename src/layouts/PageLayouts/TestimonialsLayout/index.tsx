// Components
import AddMyTestimony from '@modules/Testimonials/components/AddMyTestimony'
import TestimonialsPagination from '@modules/Testimonials/components/TestimonialsPagination'

export default function TestimonialsLayout() {
  return (
    <section className="testimonials">
      <AddMyTestimony />
      <TestimonialsPagination />
    </section>
  )
}
