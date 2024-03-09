// Components
import Loading from '@components/Loading'
import BoxWrapper from '@components/Wrapper'
import ProductsPlaceholder from '@modules/Product/components/ProductsPlaceholder'
import ProductsHeaderFallback from '@modules/Product/components/ProductsHeader/Fallback'

export default function ProductLoading() {
  return (
    <div className="product-loading flex flex-col gap-y-[2.5rem] sm:mx-3 md:mx-6 xl:mx-[3.63rem]">
      <BoxWrapper className="min-h-[42rem] max-h-[42rem] flex items-center justify-center">
        <Loading title="Cargando datos del producto..." />
      </BoxWrapper>

      <div className="flex flex-col gap-y-3">
        <ProductsHeaderFallback />
        <ProductsPlaceholder />
      </div>
    </div>
  )
}
