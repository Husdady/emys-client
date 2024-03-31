// Librarys
import React from 'react'

// Components
import Option from './Option'
import SearchOptions from '@components/SearchOptions'
import EmptyOptions from '@components/EmptyOptions'

// Hooks
import useOptions from './useOptions'

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
  searchPlaceholder,
  canSearchOptions = DEFAULT_CAN_SEARCH_OPTIONS
}: OptionsProps) => {
  const {
    wrapperRef,
    searchValue,
    handleClear,
    handleSearch,
    hasScrollbar,
    filteredOptions,
    selectOptionsRef,
    selectOptionsStyle,
    isShowingClearIcon
  } = useOptions({
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
          placeholder={searchPlaceholder}
          isShowingClearIcon={isShowingClearIcon}
        />
      )}

      {isEmptyArray(filteredOptions) && <EmptyOptions text={emptyText} />}

      {!isEmptyArray(filteredOptions) && (
        <ul
          ref={selectOptionsRef}
          style={selectOptionsStyle}
          className="select-options overflow-y-auto"
        >
          {filteredOptions.map((item, i) => (
            <li
              key={item.value}
              className={classnames([
                'select-option',
                selectedValue === item.value ? 'active' : null,
                hasScrollbar ? 'border-r' : i < filteredOptions.length ? 'border-b' : null
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
