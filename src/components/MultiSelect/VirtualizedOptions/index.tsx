// Librarys
import React from 'react'

// Component
import VirtualizedOption from './VirtualizedOption'
import EmptyOptions from '@components/EmptyOptions'
import SearchOptions from '@components/SearchOptions'
import VariableSizeList from '@components/VariableSizeList'

// Hooks
import useSearchVirtualizedOptions from './useVirtualizedOptions'

// Interfaces
import { VirtualizedOptionsProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'
import isEmptyArray from '@utils/isEmptyArray'

// Constants
import { DEFAULT_CAN_SEARCH_OPTIONS } from '@components/MultiSelect/constants'

const VirtualizedOptions: React.FC<VirtualizedOptionsProps> = ({
  options,
  onChange,
  emptyText,
  isMarkedOption,
  selectedValues,
  searchPlaceholder,
  canSearchOptions = DEFAULT_CAN_SEARCH_OPTIONS
}: VirtualizedOptionsProps) => {
  const {
    listRef,
    wrapperRef,
    hasScrollbar,
    isLastActived,
    containerStyle,
    containerListRef,
    windowWidth,
    listHeight,
    getOptionSize,
    setOptionSize,
    searchValue,
    handleClear,
    handleSearch,
    filteredOptions,
    isShowingClearIcon
  } = useSearchVirtualizedOptions({
    initialOptions: options,
    selectedValues: selectedValues,
    canSearchOptions: canSearchOptions
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

      <div ref={containerListRef} style={containerStyle} className="virtualized-checkbox-options">
        {isEmptyArray(filteredOptions) && <EmptyOptions text={emptyText} />}

        {!isEmptyArray(filteredOptions) && (
          <VariableSizeList
            ref={listRef}
            height={listHeight}
            itemSize={getOptionSize}
            itemCount={filteredOptions.length}
            innerElementType="ul"
            width="100%"
          >
            {({ index, style }) => (
              <li
                style={style}
                onClick={() => onChange(filteredOptions[index])}
                className={classnames([
                  'virtualized-checkbox-option-item',
                  isLastActived(filteredOptions[index]) ? 'last-item-actived' : null,
                  hasScrollbar ? 'border-r' : index < filteredOptions.length ? 'border-b' : null
                ])}
              >
                <VirtualizedOption
                  index={index}
                  onChange={onChange}
                  windowWidth={windowWidth}
                  setOptionSize={setOptionSize}
                  isMarkedOption={isMarkedOption}
                  {...filteredOptions[index]}
                />
              </li>
            )}
          </VariableSizeList>
        )}
      </div>
    </div>
  )
}

export default React.memo(VirtualizedOptions, (prevProps, nextProps) => {
  return (
    prevProps.onChange === nextProps.onChange &&
    prevProps.isMarkedOption === nextProps.isMarkedOption &&
    prevProps.selectedValues === nextProps.selectedValues
  )
})
