// Librarys
import React from 'react'

// Component
import Option from './Option'
import EmptyOptions from '@components/EmptyOptions'
import SearchOptions from '@components/SearchOptions'

// Hooks
import useOptions from './useOptions'

// Interfaces
import { OptionsProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'
import isEmptyArray from '@utils/isEmptyArray'

// Constants
import { DEFAULT_CAN_SEARCH_OPTIONS } from '@components/MultiSelect/constants'

const Options: React.FC<OptionsProps> = ({
  options,
  onChange,
  emptyText,
  isMarkedOption,
  selectedValues,
  searchPlaceholder,
  enableVirtualization,
  canSearchOptions = DEFAULT_CAN_SEARCH_OPTIONS
}: OptionsProps) => {
  const {
    wrapperRef,
    searchValue,
    handleClear,
    hasScrollbar,
    handleSearch,
    isLastActived,
    filteredOptions,
    isShowingClearIcon,
    checkboxOptionsRef,
    checkboxOptionsStyle
  } = useOptions({
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
          placeholder={searchPlaceholder}
          isShowingClearIcon={isShowingClearIcon}
        />
      )}

      {isEmptyArray(filteredOptions) && <EmptyOptions text={emptyText} />}

      {!isEmptyArray(filteredOptions) && (
        <ul
          ref={checkboxOptionsRef}
          style={checkboxOptionsStyle}
          className="checkbox-options overflow-y-auto"
        >
          {filteredOptions.map((item, i) => (
            <li
              key={item.value}
              onClick={() => onChange(item)}
              className={classnames([
                'checkbox-option-item',
                isLastActived(item) ? 'last-item-actived' : null,
                hasScrollbar ? 'border-r' : i < filteredOptions.length ? 'border-b' : null
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
    prevProps.options === nextProps.options &&
    prevProps.onChange === nextProps.onChange &&
    prevProps.isMarkedOption === nextProps.isMarkedOption &&
    prevProps.selectedValues === nextProps.selectedValues
  )
})
