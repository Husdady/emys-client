// Components
import AddMyTestimony from '@modules/Testimonials/components/AddMyTestimony'
import ReloadTestimonials from '@modules/Testimonials/components/ReloadTestimonials'
import TestimonialsPagination from '@modules/Testimonials/components/TestimonialsPagination'

export default function TestimonialsLayout() {
  return (
    <section className="testimonials mt-2 pb-6">
      <div className="my-3 sm:mt-0 sm:mb-[2rem] flex items-center justify-end gap-x-3.5 gap-y-3 flex-wrap sm:flex-nowrap max-w-[1150px] mx-4 sm:mx-[2rem] xl:mx-auto">
        <AddMyTestimony className="order-last sm:order-first" />
        <ReloadTestimonials />
      </div>

      <TestimonialsPagination />
    </section>
  )
}
