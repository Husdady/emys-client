import { Path, UseFormSetValue, PathValue, FieldValues } from 'react-hook-form'

export interface Params<T extends FieldValues> {
  fields: [Path<T>, Path<T>]
  values: Array<number | null>
  setValue: UseFormSetValue<T>
}

/**
 * Callback for changing the price range
 * @param {Params} params Receives values
 * @returns {void} Void
 */
export default function handleChangePriceRange<T extends FieldValues>({
  values,
  fields,
  setValue
}: Params<T>): void {
  const [minPrice, maxPrice] = values

  // Update range prices
  setValue(fields[0], (minPrice === null ? '' : String(minPrice)) as PathValue<T, Path<T>>)
  setValue(fields[1], (minPrice === null ? '' : String(maxPrice)) as PathValue<T, Path<T>>)
}
