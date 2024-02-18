// Components
import Error from './Error'
import Products from './Products'
import Pagination from '@components/Pagination'

// Hooks
import usePagination from './usePagination'

// Utils
import isUndefined from '@utils/isUndefined'

export default function CustomPagination() {
  const { isError, data, isFetching, changePage } = usePagination()

  // Show error in the screen
  if (isError) return <Error />

  return (
    <section className="main-products-section !px-3 md:!px-4.5 lg:!px-6 lg:px-[1.25rem]">
      <Products isFetching={isFetching} docs={data?.products?.data} />

      {!isUndefined(data) && !isUndefined(data.products.meta) && (
        <Pagination
          className="pt-4"
          onChange={changePage}
          isFetching={isFetching}
          totalDocs={data.products.data?.length}
          {...data.products.meta}
        />
      )}
    </section>
  )
}
