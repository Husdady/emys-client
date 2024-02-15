// Components
import MainSeeker from '@components/MainSeeker'

// Hooks
import useInputSearch from './useInputSearch'

export default function InputSearch() {
  const {
    searchValue,
    handlePressEnter,
    handleUpdateValue,
    isShowingClearIcon,
    handleClearSearchValue
  } = useInputSearch()

  return (
    <MainSeeker
      value={searchValue}
      onChange={handleUpdateValue}
      onPressEnter={handlePressEnter}
      onClear={handleClearSearchValue}
      isShowingClearIcon={isShowingClearIcon}
      placeholder="Buscar vendedores por sus datos personales..."
      containerClassName="w-[85%]"
    />
  )
}
