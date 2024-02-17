// Components
import Error from './Error'
import Sellers from './Sellers'
import Pagination from '@components/Pagination'

// Hooks
import useSellers from './useSellers'

// Utils
import isUndefined from '@utils/isUndefined'

export default function CustomPagination() {
  const { isError, data, isFetching, changePage } = useSellers()

  // Show error in the screen
  if (isError) return <Error />

  return (
    <section className="main-sellers-section px-6 lg:px-[3rem]">
      <Sellers isFetching={isFetching} docs={data?.sellers?.data} />

      {!isUndefined(data) && !isUndefined(data.sellers.meta) && (
        <Pagination
          className="pt-6"
          onChange={changePage}
          isFetching={isFetching}
          totalDocs={data.sellers.data?.length}
          {...data.sellers.meta}
        />
      )}
    </section>
  )
}
