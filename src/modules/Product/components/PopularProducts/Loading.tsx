// Components
import ProductsPlaceholder from '@modules/Product/components/ProductsPlaceholder'
import ProductsHeaderFallback from '@modules/Product/components/ProductsHeader/Fallback'

export default function Loading() {
  return (
    <div className="flex flex-col gap-y-3 px-2 sm:px-4 pt-4 pb-2 xl:px-0 xl:ml-[2.85rem] xl:mr-[3.63rem]">
      <ProductsHeaderFallback />
      <ProductsPlaceholder />
    </div>
  )
}
