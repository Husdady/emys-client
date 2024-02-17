// Components
import Error from './Error'
import Testimonials from './Testimonials'
import Pagination from '@components/Pagination'

// Hooks
import useTestimonials from './useTestimonials'

// Utils
import isUndefined from '@utils/isUndefined'

export default function CustomPagination() {
  const { isError, data, isFetching, changePage } = useTestimonials()

  // Show error in the screen
  if (isError) return <Error />

  return (
    <section className="main-testimonials-section px-6 lg:px-[3rem]">
      <Testimonials isFetching={isFetching} docs={data?.testimonials?.data} />

      {!isUndefined(data) && !isUndefined(data.testimonials.meta) && (
        <Pagination
          className="pt-6"
          onChange={changePage}
          isFetching={isFetching}
          totalDocs={data.testimonials.data?.length}
          {...data.testimonials.meta}
        />
      )}
    </section>
  )
}
