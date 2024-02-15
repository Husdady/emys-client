// Components
import Filters from './Filters'
import Pagination from './Pagination'
import MainTitle from '@components/MainTitle'

export default function TestimonialsPagination() {
  return (
    <section className="testimonials-pagination">
      <MainTitle title="Testimonios Omnilife" />
      <Filters />
      <Pagination />
    </section>
  )
}
