// Components
import MainSeeker from '@modules/Testimonials/components/MainSeeker'

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
    <MainSeeker
      value={searchValue}
      onChange={handleSearchProducts}
      onClear={handleClearSearchValue}
      isShowingClearIcon={isShowingClearIcon}
      containerClassName="mx-auto max-w-[1100px] input-search-latest-testimonials"
    />
  )
}
