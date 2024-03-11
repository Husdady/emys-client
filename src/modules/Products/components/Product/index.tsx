// Librarys
import dynamic from 'next/dynamic'

// Components
import Price from './Price'
import ProductName from './ProductName'
import Description from './Description'
import ProductImage from './ProductImage'
import SellerPlaceholder from './Seller/Placeholder'
import StockTagPlaceholder from './StockTag/Placeholder'
import ContactSellerPlaceholder from './ContactSeller/Placeholder'
import Link from '@components/Link'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import { PRODUCTS_PATH } from '@data/paths'

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
  id,
  name,
  code,
  price,
  images,
  isInStock,
  mainSeller,
  coverImage,
  description,
  currencyType
}: Product) {
  return (
    <Link
      href={`${PRODUCTS_PATH}/${code}`}
      title={`Click para ver más detalles de ${name}`}
      className={classnames([
        isInStock
          ? 'hover:shadow-sky-200 hover:border-sky-200 hover:border-sky-400 dark:hover:border-sky-400'
          : 'hover:shadow-red-200 hover:border-red-200 hover:border-red-400 dark:hover:border-pink-600',
        'product animate__animated animate__fadeIn h-full relative bg-white shadow-lg border border-gray-200 min-w-[290px] max-w-[290px] md:min-w-[250px] md:max-w-[250px] min-h-[200px] rounded-xl pb-4 pt-3.5 px-2.5 sm:px-3.5 dark:shadow-none dark:bg-gray-800 dark:border-gray-500 flex flex-col justify-between'
      ])}
    >
      <Heart productId={id} productName={name} />

      <div className="flex">
        <StockTag isInStock={isInStock} />
      </div>

      <div className="mt-3">
        <ProductImage coverImage={coverImage} firstImage={images?.[0]} />
        <ProductName name={name} isInStock={isInStock} />
        <Description description={description} />
      </div>

      <div>
        <Price price={price} currencyType={currencyType} />
        <Seller {...(mainSeller ?? {})} />
        <ContactSeller name={name} isInStock={isInStock} mainSeller={mainSeller} />
      </div>
    </Link>
  )
}
