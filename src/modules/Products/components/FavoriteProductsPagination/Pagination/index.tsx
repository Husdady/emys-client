// Components
import Error from './Error'
import Pagination from '@components/Pagination'
import FavoriteProducts from './FavoriteProducts'

// Hooks
import usePagination from './usePagination'

// Utils
import isUndefined from '@utils/isUndefined'

export default function CustomPagination() {
  const { data, isError, isFetching, changePage } = usePagination()

  // Show error in the screen
  if (isError) return <Error />

  return (
    <section className="main-favorite-products-section !px-3 md:!px-4.5 lg:!px-6 lg:px-[1.25rem]">
      <FavoriteProducts isFetching={isFetching} docs={data?.myFavoriteProducts?.data} />

      {!isUndefined(data) && !isUndefined(data.myFavoriteProducts.meta) && (
        <Pagination
          className="pt-6"
          onChange={changePage}
          isFetching={isFetching}
          totalDocs={data.myFavoriteProducts.data?.length}
          {...data.myFavoriteProducts.meta}
        />
      )}
    </section>
  )
}
