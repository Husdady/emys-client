// Components
import ReloadProducts from '@modules/Products/components/ReloadProducts'
import ProductsPagination from '@modules/Products/components/ProductsPagination'

export default function ProductsLayout() {
  return (
    <section className="products-layout mt-2 pb-6">
      <div className="my-3 sm:mt-0 sm:mb-[2rem] flex items-center justify-end max-w-[1150px] mx-4 sm:mx-[2rem] xl:mx-auto">
        <ReloadProducts />
      </div>

      <ProductsPagination />
    </section>
  )
}
