// Components
import Stars from './components/Stars'
import Units from './components/Units'
import Header from './components/Header'
import SubItem from './components/SubItem'
import ProductFields from './ProductFields'
import ProductName from './components/ProductName'
import Price from '@modules/Products/components/Product/Price'
import Seller from '@modules/Products/components/Product/Seller'
import StockTag from '@modules/Products/components/Product/StockTag'
import ContactSeller from '@modules/Products/components/Product/ContactSeller'

// Hooks
import useProductInformation from './useProductInformation'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

export default function ProductInformation(product: Product) {
  const { units, setUnits, setDefaultContactSellerMessage } = useProductInformation()

  return (
    <aside className="product-information bg-white pt-3.5 pb-4 px-4 font-poppins rounded shadow-lg min-h-[500px]">
      <Header {...product} />
      <ProductName {...product} />
      <Stars {...product} />

      <div className="flex justify-between mt-1.5 gap-x-4">
        <SubItem field="SKU:" value={product.sku} className="product-sku" />
        <SubItem field="Código:" value={product.code} className="product-code" />
      </div>

      <div className="flex justify-between mt-0.5 gap-x-4">
        <SubItem
          field="País de origen:"
          className="product-country-origin"
          value={product.countryOrigin?.country}
        />

        <SubItem field="Fabricado por:" value={product.maker} className="product-maker" />
      </div>

      <div className="flex items-center justify-between gap-x-6 pr-3 mt-3">
        <StockTag isInStock={product.isInStock} />
        <Price price={product.price} currencyType={product.currencyType} />
      </div>

      <ProductFields {...product} />

      <div className="mt-2 inner-wrapper flex items-center gap-x-2">
        <Seller {...product.mainSeller} />
        <Units units={units} setUnits={setUnits} productUnits={product.totalUnits} />
      </div>

      <ContactSeller
        name={product.name}
        isInStock={product.isInStock}
        mainSeller={product.mainSeller}
        defaultMessage={setDefaultContactSellerMessage}
      />
    </aside>
  )
}
