// Components
import Results from './Results'
import Placeholder from './Results/Placeholder'

// Hooks
import useProducts from './useProducts'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

export default function Products() {
  const { products, isError, isLoading } = useProducts()

  return (
    <section id="products" className="mt-[1.5rem] mx-auto max-w-[1200px]">
      {isLoading && <Placeholder />}

      {!isLoading && Array.isArray(products) && !isEmptyArray(products) && (
        <Results products={products} />
      )}
    </section>
  )
}
