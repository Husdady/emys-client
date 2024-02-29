// Components
import Tags from './components/Tags'
import Stars from './components/Stars'
import Units from './components/Units'
import Header from './components/Header'
import ProductFields from './ProductFields'
import OmnilifeMessage from './OmnilifeMessage'
import Price from '@modules/Products/components/Product/Price'
import Seller from '@modules/Products/components/Product/Seller'
import StockTag from '@modules/Products/components/Product/StockTag'
import ContactSeller from '@modules/Products/components/Product/ContactSeller'

// Hooks
import useProductInformation from './useProductInformation'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

// Constnats
import { PRODUCT_TYPE } from '@modules/Products/api/constants'

export default function ProductInformation(product: Product) {
  const { units, setUnits, innerInformationRef, setDefaultContactSellerMessage } =
    useProductInformation(product)

  return (
    <aside className="product-information bg-white overflow-hidden pt-3.5 pb-4 font-poppins rounded shadow-lg dark:shadow-none dark:bg-gray-900 flex flex-col justify-between">
      <div
        ref={innerInformationRef}
        className="pr-3 inner-information xl:min-h-[32.35rem] xl:max-h-[32.35rem] xl:overflow-y-auto pl-2 ml-2 mr-1 pb-4"
      >
        <Header {...product} />

        <h3 className="product-name text-[1.75rem] leading-tight break-word font-semibold text-gray-700 dark:text-white">
          {product.name}
        </h3>

        <div className="price-container flex items-center justify-between gap-x-6 mt-3 mb-4">
          <StockTag isInStock={product.isInStock} />
          <Price price={product.price} currencyType={product.currencyType} />
        </div>

        <Stars {...product} />
        {product.type !== PRODUCT_TYPE && <OmnilifeMessage />}
        <Tags {...product} />
        <ProductFields {...product} innerInformationRef={innerInformationRef} />
      </div>

      <div className="pt-2 border-t border-gray-300 dark:border-gray-600 px-4 footer-content">
        <div className="mt-2 units-wrapper flex items-center gap-x-2">
          <Seller {...product.mainSeller} />

          <Units
            units={units}
            setUnits={setUnits}
            isInStock={product.isInStock}
            productUnits={product.totalUnits}
          />
        </div>

        <ContactSeller
          name={product.name}
          isInStock={product.isInStock}
          mainSeller={product.mainSeller}
          defaultMessage={setDefaultContactSellerMessage}
        />
      </div>
    </aside>
  )
}
