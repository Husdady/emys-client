// Components
import Filters from './Filters'
import Pagination from './Pagination'
import MainTitle from '@components/MainTitle'

export default function ProductsPagination() {
  return (
    <section className="products-pagination">
      <MainTitle title='Nuestros Productos' />
      <Filters />
      <Pagination />
    </section>
  )
}
