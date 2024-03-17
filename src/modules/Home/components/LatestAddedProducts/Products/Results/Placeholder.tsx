// Components
import ProductsPlaceholder from '@modules/Product/components/ProductsPlaceholder'
import InputSearchPlaceholder from '@modules/Home/components/LatestAddedProducts/Products/Results/InputSearch/Placeholder'

export default function Placeholder() {
  return (
    <div>
      <InputSearchPlaceholder />
      <ProductsPlaceholder className="mt-[2.5rem]" />
    </div>
  )
}
