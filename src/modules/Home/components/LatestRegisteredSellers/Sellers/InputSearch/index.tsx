// Components
import InputText from '@components/InputText'
import MagnifyingGlass from '@assets/icons/magnifying-glass'

// Hooks
import useInputSearch from './useInputSearch'

// Interfaces
import { InputSearchProps } from './interfaces'

export default function InputSearch({ sellers, setResults }: InputSearchProps) {
  const { searchValue, isShowingClearIcon, handleSearchProducts, handleClearSearchValue } =
    useInputSearch({
      sellers: sellers,
      setResults: setResults
    })

  return (
    <InputText
      value={searchValue}
      onChange={handleSearchProducts}
      onClear={handleClearSearchValue}
      isShowingClearIcon={isShowingClearIcon}
      icon={<MagnifyingGlass size="xsm" className="text-gray-400" />}
      innerClassName="!rounded-full !px-7 !py-4 text-[0.95rem] !outline-transparent dark:!bg-gray-800"
      containerClassName="input-search-latest-sellers !border-none max-w-[1100px] mx-auto animate__animated animate__fadeIn"
      placeholder="Buscar vendedores por nombre, dni, ruc, correo electrónico o número telefónico..."
    />
  )
}