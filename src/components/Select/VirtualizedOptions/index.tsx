// Librarys
import React from 'react'

// Components
import VirtualizedOption from './VirtualizedOption'
import EmptyOptions from '@components/EmptyOptions'
import SearchOptions from '@components/SearchOptions'
import VariableSizeList from '@components/VariableSizeList'

// Hooks
import useSearchVirtualizedOptions from './useSearchVirtualizedOptions'

// Interfaces
import { VirtualizedOptionsProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'
import isEmptyArray from '@utils/isEmptyArray'

// Constants
import { DEFAULT_CAN_SEARCH_OPTIONS } from '@components/Select/constants'

const VirtualizedOptions: React.FC<VirtualizedOptionsProps> = ({
  options,
  onChange,
  emptyText,
  selectedValue,
  searchPalceholder,
  enableVirtualization,
  canSearchOptions = DEFAULT_CAN_SEARCH_OPTIONS
}: VirtualizedOptionsProps) => {
  const {
    listRef,
    wrapperRef,
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
    selectedValue: selectedValue,
    canSearchOptions: canSearchOptions,
    enableVirtualization: enableVirtualization
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

      <div ref={containerListRef} style={containerStyle} className="virtualized-options">
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
                className={classnames([
                  'virtualized-option-item',
                  selectedValue === filteredOptions[index]?.value ? 'active' : null
                ])}
              >
                <VirtualizedOption
                  index={index}
                  windowWidth={windowWidth}
                  setOptionSize={setOptionSize}
                  onChange={onChange}
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
    prevProps.options === nextProps.options &&
    prevProps.onChange === nextProps.onChange &&
    prevProps.selectedValue === nextProps.selectedValue
  )
})
