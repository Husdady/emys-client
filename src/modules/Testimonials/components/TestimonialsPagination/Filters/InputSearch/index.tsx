// Components
import MainSeeker from '@modules/Testimonials/components/MainSeeker'

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
      containerClassName="w-[85%]"
    />
  )
}
