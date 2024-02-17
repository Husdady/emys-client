// Components
import ReloadFavoriteProducts from '@modules/Products/components/ReloadFavoriteProducts'
import FavoriteProductsPagination from '@modules/Products/components/FavoriteProductsPagination'

export default function MyFavoriteProductsLayout() {
  return (
    <section className="my-favorite-products-layout mt-2 pb-6">
      <div className="my-3 sm:mt-0 sm:mb-[2rem] flex items-center justify-end max-w-[1150px] mx-4 sm:mx-[2rem] xl:mx-auto">
        <ReloadFavoriteProducts />
      </div>

      <FavoriteProductsPagination />
    </section>
  )
}
