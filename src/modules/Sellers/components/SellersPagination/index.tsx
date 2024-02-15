// Components
import Filters from './Filters'
import Pagination from './Pagination'
import MainTitle from '@components/MainTitle'

export default function SellersPagination() {
  return (
    <section className="sellers-pagination">
      <MainTitle title="Nuestros Vendedores" />
      <Filters />
      <Pagination />
    </section>
  )
}
