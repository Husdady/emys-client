// Components
import BackButton from '@components/BackButton'
import ProductWrapper from '@modules/Product/components/ProductContainer'
import PopularProducts from '@modules/Product/components/PopularProducts'
import AddProductToFavorites from '@modules/Product/components/AddProductToFavorites'

// Constants
import { PRODUCTS_PATH } from '@data/paths'

export default function ProductLayout() {
  return (
    <section className="product-layout mt-2 pb-4 sm:pb-6 max-w-[1600px] mx-auto flex flex-col gap-y-3">
      <div className="flex flex-wrap items-center gap-x-3 mx-2 sm:mx-3 md:mx-6 xl:mx-[3.63rem] gap-y-2.5 mb-3 md:mb-1">
        <BackButton
          path={PRODUCTS_PATH}
          title="Volver a la sección de Productos"
          className=" sm:max-w-[305px] 2xl:max-w-[350px]"
        />

        <AddProductToFavorites />
      </div>

      <div className="flex flex-col gap-y-1.5">
        <ProductWrapper />
        <PopularProducts />
      </div>
    </section>
  )
}
