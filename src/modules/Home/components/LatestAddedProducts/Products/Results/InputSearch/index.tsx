// Components
import InputText from '@components/InputText'
import MagnifyingGlass from '@assets/icons/magnifying-glass'

// Hooks
import useInputSearch from './useInputSearch'

// Interfaces
import { InputSearchProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

export default function InputSearch({ products, setResults }: InputSearchProps) {
  const {
    ref,
    searchValue,
    isShowingClearIcon,
    animationClassName,
    handleSearchProducts,
    handleClearSearchValue
  } = useInputSearch({
    products: products,
    setResults: setResults
  })

  return (
    <div ref={ref}>
      <InputText
        value={searchValue}
        onChange={handleSearchProducts}
        onClear={handleClearSearchValue}
        isShowingClearIcon={isShowingClearIcon}
        icon={<MagnifyingGlass size="xsm" className="text-gray-400" />}
        containerClassName={classnames([
          animationClassName,
          'input-search-latest-products !border-none max-w-[1100px] mx-auto animate__animated animate__fadeIn'
        ])}
        innerClassName="!rounded-full !px-7 !py-4 text-[0.95rem] !outline-transparent dark:!bg-gray-800"
        placeholder="Buscar productos por nombre, sku, precio o descripción..."
      />
    </div>
  )
}
