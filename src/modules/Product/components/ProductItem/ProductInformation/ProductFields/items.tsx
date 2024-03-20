// Components
import Benefits from './components/Benefits'
import UsageMode from './components/UsageMode'
import Ingredients from './components/Ingredients'
import Description from './components/Description'
import CustomFields from './components/CustomFields'
import MainInformation from './components/MainInformation'
import Characteristics from './components/Characteristics'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

// Utils
import isString from '@utils/isString'
import isEmptyArray from '@utils/isEmptyArray'
import isEmptyString from '@utils/isEmptyString'

// Constants
import {
  PRODUCT_BENEFITS,
  PRODUCT_USAGE_MODE,
  PRODUCT_DESCRIPTION,
  PRODUCT_INGREDIENTS,
  PRODUCT_CHARACTERISTICS,
  PRODUCT_MAIN_INFORMATION,
  PRODUCT_EXTRA_INFORMATION
} from './constants'

/**
 * Create the Description item
 * @param {Product} product Product
 */
export function createDescriptionItem(product: Product) {
  return {
    label: 'Descripción',
    key: PRODUCT_DESCRIPTION,
    children: <Description description={product.description} />
  }
}

/**
 * Create the UsageMode item
 * @param {Product} product Product
 */
export function createUsageModeItem(product: Product) {
  const usageMode = product.usageMode // Get product usageMode

  // Validate usageMode of the product
  if (!isString(usageMode) || isEmptyString(usageMode)) return

  return {
    label: 'Modo de Uso',
    key: PRODUCT_USAGE_MODE,
    children: <UsageMode usageMode={usageMode} />
  }
}

/**
 * Create the Benefits item
 * @param {Product} product Product
 */
export function createBenefitsItem(product: Product) {
  const benefits = product.benefits // Get product benefits

  // Validate benefits of the product
  if (!Array.isArray(benefits) || isEmptyArray(benefits)) return

  return {
    label: 'Beneficios',
    key: PRODUCT_BENEFITS,
    children: <Benefits benefits={benefits} />
  }
}

/**
 * Create the Ingredients item
 * @param {Product} product Product
 */
export function createIngredientsItem(product: Product) {
  const ingredients = product.ingredients // Get product ingredients

  // Validate ingredients of the product
  if (!Array.isArray(ingredients) || isEmptyArray(ingredients)) return

  return {
    label: 'Ingredientes',
    key: PRODUCT_INGREDIENTS,
    children: <Ingredients ingredients={ingredients} />
  }
}

/**
 * Create the Characteristics item
 * @param {Product} product Product
 */
export function createCharacteristicsItem(product: Product) {
  const characteristics = product.characteristics // Get product characteristics

  // Validate characteristics of the product
  if (!Array.isArray(characteristics) || isEmptyArray(characteristics)) return

  return {
    label: 'Características',
    key: PRODUCT_CHARACTERISTICS,
    children: <Characteristics characteristics={characteristics} />
  }
}

/**
 * Create the Main Information item
 * @param {Product} product Product
 */
export function createMainInformationItem(product: Product) {
  return {
    label: 'Información Principal',
    key: PRODUCT_MAIN_INFORMATION,
    children: <MainInformation {...product} />
  }
}

/**
 * Create the Extra Information item
 * @param {Product} product Product
 */
export function createExtraInformationItem(product: Product) {
  const extraInformation = product.extraInformation // Get product extraInformation

  // Validate Extra Information of the product
  if (!Array.isArray(extraInformation) || isEmptyArray(extraInformation)) return

  return {
    label: 'Información Extra',
    key: PRODUCT_EXTRA_INFORMATION,
    children: (
      <CustomFields
        extraInformation={product.extraInformation}
        customProductFields={product.customProductFields}
      />
    )
  }
}
