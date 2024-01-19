// Components
import InputText from '@components/InputText'
import MagnifyingGlass from '@assets/icons/magnifying-glass'

// Hooks
import useInputSearch from './useInputSearch'

// Interfaces
import { InputSearchProps } from './interfaces'

export default function InputSearch({ setResults, testimonials }: InputSearchProps) {
  const { searchValue, isShowingClearIcon, handleSearchProducts, handleClearSearchValue } =
    useInputSearch({
      setResults: setResults,
      testimonials: testimonials
    })

  return (
    <InputText
      value={searchValue}
      onChange={handleSearchProducts}
      onClear={handleClearSearchValue}
      isShowingClearIcon={isShowingClearIcon}
      placeholder="Buscar testimonios por datos del autor..."
      icon={<MagnifyingGlass size="xsm" className="text-gray-400" />}
      innerClassName="!rounded-full !px-7 !py-4 text-[0.95rem] !outline-transparent dark:!bg-gray-800"
      containerClassName="input-search-latest-testimonials !border-none max-w-[1100px] mx-auto animate__animated animate__fadeIn"
    />
  )
}
