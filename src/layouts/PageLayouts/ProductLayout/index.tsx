// Components
import BackButton from '@components/BackButton'
import ProductWrapper from '@modules/Product/components/ProductContainer'
import PopularProducts from '@modules/Product/components/PopularProducts'

// Constants
import { PRODUCTS_PATH } from '@data/paths'

export default function ProductLayout() {
  return (
    <section className="product-layout mt-2 pb-4 sm:pb-6 max-w-[1600px] mx-auto flex flex-col gap-y-3">
      <BackButton
        path={PRODUCTS_PATH}
        title="Volver a la sección de Productos"
        className="mx-2 sm:mx-3 md:mx-6 xl:mx-[3.63rem] sm:max-w-[305px] 2xl:max-w-[350px]"
      />

      <div className="flex flex-col gap-y-1.5">
        <ProductWrapper />
        <PopularProducts />
      </div>
    </section>
  )
}
