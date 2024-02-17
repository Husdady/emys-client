// Components
import Filters from './Filters'
import Pagination from './Pagination'
import MainTitle from '@components/MainTitle'

export default function FavoriteProductsPagination() {
  return (
    <section className="favorite-products-pagination">
      <MainTitle title='Mis Productos favoritos' />
      <Filters />
      <Pagination />
    </section>
  )
}
