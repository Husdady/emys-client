// Librarys
import React from 'react'

// Component
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

// Constants
import { DEFAULT_CAN_SEARCH_OPTIONS } from '@components/MultiSelect/constants'

const VirtualizedOptions: React.FC<VirtualizedOptionsProps> = ({
  options,
  onChange,
  emptyText,
  isMarkedOption,
  selectedValues,
  searchPalceholder,
  canSearchOptions = DEFAULT_CAN_SEARCH_OPTIONS
}: VirtualizedOptionsProps) => {
  const {
    listRef,
    wrapperRef,
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
          placeholder={searchPalceholder}
          isShowingClearIcon={isShowingClearIcon}
        />
      )}

      <div ref={containerListRef} style={containerStyle} className="virtualized-checkbox-options">
        {filteredOptions.length === 0 && <EmptyOptions text={emptyText} />}

        {filteredOptions.length > 0 && (
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
                  'virtualized-checkbox-option-item',
                  isLastActived(filteredOptions[index]) ? 'last-item-actived' : null
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
