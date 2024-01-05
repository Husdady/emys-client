// Librarys
import dynamic from 'next/dynamic'

// Components
import Sku from './Sku'
import Price from './Price'
import ProductName from './ProductName'
import Description from './Description'
import ProductImage from './ProductImage'
import SellerPlaceholder from './Seller/Placeholder'
import StockTagPlaceholder from './StockTag/Placeholder'
import ContactSellerPlaceholder from './ContactSeller/Placeholder'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Utils
import classnames from '@utils/classnames'

// Dynamic Components
const Heart = dynamic(() => import('./Heart'))

const Seller = dynamic(() => import('./Seller'), {
  loading: () => <SellerPlaceholder />
})

const StockTag = dynamic(() => import('./StockTag'), {
  loading: () => <StockTagPlaceholder />
})

const ContactSeller = dynamic(() => import('./ContactSeller'), {
  loading: () => <ContactSellerPlaceholder />
})

export default function Product({
  sku,
  name,
  price,
  coverImage,
  isInStock,
  description,
  currencyType
}: Product) {
  return (
    <article
      role="button"
      tabIndex={0}
      title={`Ver más detalles de ${name}`}
      className={classnames([
        isInStock
          ? 'hover:shadow-sky-200 hover:border-sky-200 hover:border-sky-400 dark:hover:border-sky-400'
          : 'hover:shadow-red-200 hover:border-red-200 hover:border-red-400 dark:hover:border-pink-600',
        'product animate__animated animate__fadeIn h-full relative bg-white shadow-lg border border-gray-200 min-w-[290px] max-w-[290px] md:min-w-[250px] md:max-w-[250px] min-h-[200px] rounded-xl pb-4 pt-3.5 px-3.5 dark:shadow-none dark:bg-gray-800 dark:border-gray-500'
      ])}
    >
      <Heart />
      <ProductImage coverImage={coverImage} />
      <ProductName name={name} isInStock={isInStock} />

      <div className="flex items-center justify-between gap-x-4 my-2">
        <Sku sku={sku} />
        <StockTag isInStock={isInStock} />
      </div>

      <Description description={description} />
      <Price price={price} currencyType={currencyType} />
      <Seller />
      <ContactSeller isInStock={isInStock} />
    </article>
  )
}
