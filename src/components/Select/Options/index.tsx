// Librarys
import React from 'react'

// Components
import Option from './Option'
import SearchOptions from '@components/SearchOptions'
import EmptyOptions from '@components/EmptyOptions'

// Hooks
import useSearchOptions from './useSearchOptions'

// Interfaces
import { OptionsProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'
import isEmptyArray from '@utils/isEmptyArray'

// Constants
import { DEFAULT_CAN_SEARCH_OPTIONS } from '@components/Select/constants'

const Options: React.FC<OptionsProps> = ({
  options,
  onChange,
  emptyText,
  selectedValue,
  searchPalceholder,
  canSearchOptions = DEFAULT_CAN_SEARCH_OPTIONS
}: OptionsProps) => {
  const {
    wrapperRef,
    searchValue,
    handleClear,
    handleSearch,
    filteredOptions,
    isShowingClearIcon,
    selectOptionsStyle
  } = useSearchOptions({
    initialOptions: options,
    canSearchOptions: canSearchOptions
  })

  return (
    <div ref={wrapperRef} className="wrapper-options">
      {canSearchOptions && !isEmptyArray(options) && (
        <SearchOptions
          value={searchValue}
          onClear={handleClear}
          onChange={handleSearch}
          placeholder={searchPalceholder}
          isShowingClearIcon={isShowingClearIcon}
        />
      )}

      {isEmptyArray(filteredOptions) && <EmptyOptions text={emptyText} />}

      {!isEmptyArray(filteredOptions) && (
        <ul style={selectOptionsStyle} className="select-options overflow-y-auto">
          {filteredOptions.map((item) => (
            <li
              key={item.value}
              className={classnames([
                'select-option',
                selectedValue === item.value ? 'active' : null
              ])}
            >
              <Option {...item} onChange={onChange} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default React.memo(Options)
