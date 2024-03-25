// Librarys
import { createId } from '@libs/nanoid'

// Hooks
import { useMemo } from 'react'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'
import { TableItem } from '@modules/Product/components/Table/interfaces'

// Utils
import isNumber from '@utils/isNumber'
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

// Constants
import { weightTypes } from './constants'
import { TEXT_TYPE } from '@modules/Products/api/constants'

const NO_DEFINED = 'No definido'

/**
 * Hook for implements the logic of the MainInformaton component
 * @param {Product} product Receive product data
 */
export default function useMainInformation(product: Product) {
  // Define the product weight field of the table
  const productWeight = useMemo(() => {
    const weight = product.weight // Get the product weight
    const weightType = product.weightType // Get the product weight

    let fieldValue = ''

    // Validate 'weight' and 'weightType'
    if (!isNumber(weight) || weight <= 0 || !isString(weightType) || isEmptyString(weightType)) {
      fieldValue = NO_DEFINED
    } else {
      fieldValue = `${weight} ${weightTypes[weightType]}`
    }

    return {
      fieldName: 'Peso del producto',
      fieldValue: fieldValue
    }
  }, [product])

  // Define the units field of the table
  const units = useMemo(() => {
    const totalUnits = product.totalUnits ?? 0 // Get total units of the product

    return {
      fieldName: 'Unidades disponibles',
      fieldValue: !product.isInStock
        ? 'Sin unidades disponibles'
        : `${totalUnits} ${totalUnits <= 1 ? 'unidad disponible' : 'unidades disponibles'}`
    }
  }, [product])

  // Define the items of the table
  const items = useMemo<TableItem[]>(() => {
    const maker = product.maker // Get product maker
    const countryOrigin = product.countryOrigin?.country // Get product origin

    return [
      // Product maker
      {
        fieldName: 'Fabricante',
        fieldValue: isString(maker) && !isEmptyString(maker) ? maker : NO_DEFINED
      },

      // Product origin
      {
        fieldName: 'País de origen',
        fieldValue:
          isString(countryOrigin) && !isEmptyString(countryOrigin) ? countryOrigin : NO_DEFINED
      },
      productWeight,
      { fieldName: 'Código del producto', fieldValue: product.code },
      units
    ].map((item) => ({ ...item, type: TEXT_TYPE, fieldId: createId() }))
  }, [units, product, productWeight])

  return {
    items: items
  }
}
