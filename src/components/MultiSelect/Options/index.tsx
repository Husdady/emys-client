// Librarys
import React from 'react'

// Component
import Option from './Option'
import EmptyOptions from '@components/EmptyOptions'
import SearchOptions from '@components/SearchOptions'

// Hooks
import useSearchOptions from '@components/MultiSelect/Options/useSearchOptions'

// Interfaces
import { OptionsProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// Constants
import { DEFAULT_LIST_HEIGHT, DEFAULT_CAN_SEARCH_OPTIONS } from '@components/MultiSelect/constants'

export const style: React.CSSProperties = { maxHeight: DEFAULT_LIST_HEIGHT }

const Options: React.FC<OptionsProps> = ({
  options,
  onChange,
  emptyText,
  isMarkedOption,
  selectedValues,
  searchPalceholder,
  enableVirtualization,
  canSearchOptions = DEFAULT_CAN_SEARCH_OPTIONS
}: OptionsProps) => {
  const {
    wrapperRef,
    searchValue,
    handleClear,
    handleSearch,
    isLastActived,
    filteredOptions,
    isShowingClearIcon
  } = useSearchOptions({
    initialOptions: options,
    selectedValues: selectedValues,
    canSearchOptions: canSearchOptions,
    enableVirtualization: enableVirtualization
  })

  return (
    <div ref={wrapperRef} className="wrapper-options">
      {canSearchOptions && (
        <SearchOptions
          value={searchValue}
          onClear={handleClear}
          onChange={handleSearch}
          placeholder={searchPalceholder}
          isShowingClearIcon={isShowingClearIcon}
        />
      )}

      {filteredOptions.length === 0 && <EmptyOptions text={emptyText} />}

      {filteredOptions.length > 0 && (
        <ul style={style} className="checkbox-options overflow-y-auto">
          {filteredOptions.map((item) => (
            <li
              key={item.value}
              className={classnames([
                'checkbox-option-item',
                isLastActived(item) ? 'last-item-actived' : null
              ])}
            >
              <Option {...item} onChange={onChange} isMarkedOption={isMarkedOption} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default React.memo(Options, (prevProps, nextProps) => {
  return (
    prevProps.onChange === nextProps.onChange &&
    prevProps.isMarkedOption === nextProps.isMarkedOption &&
    prevProps.selectedValues === nextProps.selectedValues
  )
})
