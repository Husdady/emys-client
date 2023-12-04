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

// cONSTANTS
import { DEFAULT_LIST_HEIGHT, DEFAULT_CAN_SEARCH_OPTIONS } from '@components/Select/constants'

export const style: React.CSSProperties = { maxHeight: DEFAULT_LIST_HEIGHT }

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
    isShowingClearIcon
  } = useSearchOptions({
    initialOptions: options,
    canSearchOptions: canSearchOptions
  })

  return (
    <div ref={wrapperRef} className="wrapper-options">
      {canSearchOptions && options.length > 0 && (
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
        <ul style={style} className="select-options overflow-y-auto">
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
