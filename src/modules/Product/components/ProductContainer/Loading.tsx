// Components
import Loading from '@components/Loading'
import BoxWrapper from '@components/Wrapper'
import Metadata from '@modules/Product/components/Metadata/LoadingProduct'
import ProductsPlaceholder from '@modules/Product/components/ProductsPlaceholder'
import ProductsHeaderFallback from '@modules/Product/components/ProductsHeader/Fallback'

export default function ProductLoading() {
  return (
    <div className="product-loading flex flex-col gap-y-[2.5rem] sm:mx-3 md:mx-6 xl:ml-[2.85rem] xl:mr-[3.63rem]">
      <Metadata />

      <BoxWrapper className="min-h-[42rem] max-h-[42rem] flex items-center justify-center">
        <Loading title="Cargando datos del producto..." />
      </BoxWrapper>

      <div className="flex flex-col gap-y-3 mt-1 mb-5">
        <ProductsHeaderFallback />
        <ProductsPlaceholder />
      </div>
    </div>
  )
}
