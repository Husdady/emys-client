// Librarys
import Slider from 'antd/lib/slider'
import InputNumber from 'antd/lib/input-number'

// Components
import Button from '@components/Button'
import InputLabel from '@components/InputLabel'

// Interfaces
import { PriceFilterProps } from './interfaces'

// Utils
import parser from './utils/parser'
import formatter from './utils/formatter'
import classnames from '@utils/classnames'
import isUndefined from '@utils/isUndefined'

// Constants
import { MIN, MAX } from './constants'

export default function FilterByPriceRange({
  minPrice,
  maxPrice,
  textLabel,
  label = {},
  buttonClassName,
  innerClassName,
  containerClassName,
  onChangeMinPrice,
  onChangeMaxPrice,
  onChangePriceRange,
  onApplyPriceFilter,
  buttonTitle = 'Filtrar',
  hideButtonApplyFilters = false,
  isDisableApplyPriceFilterButton
}: PriceFilterProps) {
  return (
    <div
      className={classnames([
        containerClassName,
        'w-full flex flex-col filter-by-price-range-container'
      ])}
    >
      <InputLabel {...label} title={isUndefined(label.title) ? textLabel : label.title} />

      <section className="filter-by-price-range w-full flex items-center gap-y-2 gap-x-3 flex-wrap sm:flex-nowrap">
        <div
          className={classnames([
            innerClassName,
            'min-price-filter w-full flex items-center gap-y-2 gap-x-3'
          ])}
        >
          <Slider
            range
            min={MIN}
            max={MAX}
            onChange={onChangePriceRange}
            value={[minPrice ?? MIN, maxPrice ?? MAX - 1]}
          />

          <InputNumber
            min={MIN}
            max={MAX}
            parser={parser}
            formatter={formatter}
            value={minPrice ?? MIN}
            onChange={onChangeMinPrice}
            className="min-price"
            placeholder="0.00"
          />

          <InputNumber
            min={MIN}
            max={MAX}
            parser={parser}
            formatter={formatter}
            value={maxPrice ?? MAX - 1}
            onChange={onChangeMaxPrice}
            className="max-price"
            placeholder="0.00"
          />
        </div>

        {!hideButtonApplyFilters && (
          <Button
            title={buttonTitle}
            onClick={onApplyPriceFilter}
            disabled={isDisableApplyPriceFilterButton}
            className={classnames([buttonClassName, 'btn-apply-filters-by-price scale'])}
          />
        )}
      </section>
    </div>
  )
}
