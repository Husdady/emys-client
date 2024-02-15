// Components
import MainSeeker from '@components/MainSeeker'

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
    <MainSeeker
      value={searchValue}
      onChange={handleSearchProducts}
      onClear={handleClearSearchValue}
      isShowingClearIcon={isShowingClearIcon}
      containerClassName="input-search-latest-sellers max-w-[1100px] mx-auto"
      placeholder="Buscar vendedores por nombre, dni, ruc, correo electrónico o número telefónico..."
    />
  )
}
