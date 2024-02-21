// Components
import Benefits from './components/Benefits'
import UsageMode from './components/UsageMode'
import Description from './components/Description'
import Characteristics from './components/Characteristics'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Constants
import {
  PRODUCT_BENEFITS,
  PRODUCT_USAGE_MODE,
  PRODUCT_DESCRIPTION,
  PRODUCT_CHARACTERISTICS
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
  return {
    label: 'Modo de Uso',
    key: PRODUCT_USAGE_MODE,
    children: <UsageMode usageMode={product.usageMode} />
  }
}

/**
 * Create the Benefits item
 * @param {Product} product Product
 */
export function createBenefitsItem(product: Product) {
  return {
    label: 'Beneficios',
    key: PRODUCT_BENEFITS,
    children: <Benefits benefits={product.benefits} />
  }
}

/**
 * Create the Characteristics item
 * @param {Product} product Product
 */
export function createCharacteristicsItem(product: Product) {
  return {
    label: 'Características',
    key: PRODUCT_CHARACTERISTICS,
    children: <Characteristics characteristics={product.characteristics} />
  }
}
