// Types
import type { Path, UseFormSetValue, PathValue, FieldValues } from 'react-hook-form'

interface Params<T extends FieldValues> {
  field: Path<T>
  minPrice: number
  maxPrice: number
  value: number | null
  fields: [Path<T>, Path<T>]
  setValue: UseFormSetValue<T>
}

/**
 * Callback for changing the price range
 * @param {Params} params Receives values
 * @returns {void} Void
 */
export default function handleChangePrice<T extends FieldValues>({
  value,
  field,
  fields,
  setValue,
  minPrice,
  maxPrice
}: Params<T>): void {
  const newValue = (value === null ? '' : String(value)) as PathValue<T, Path<T>>

  // Update 'maxPrice'
  if (field === fields[1] && value !== null) {
    if (value < minPrice) {
      setValue(fields[0], newValue)
      return setValue(fields[1], String(minPrice) as PathValue<T, Path<T>>)
    }
  }

  // Update 'minPrice'
  if (field === fields[0] && value !== null) {
    if (value > maxPrice) {
      setValue(fields[0], String(maxPrice) as PathValue<T, Path<T>>)
      return setValue(fields[1], newValue)
    }
  }

  setValue(field, newValue)
}
