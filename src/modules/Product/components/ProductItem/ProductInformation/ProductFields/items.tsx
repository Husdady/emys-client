// Components
import Benefits from './components/Benefits'
import UsageMode from './components/UsageMode'
import Description from './components/Description'
import CustomFields from './components/CustomFields'
import Characteristics from './components/Characteristics'

// Interfaces
import { ProductByCode } from '@modules/Product/api/interfaces'

// Constants
import {
  PRODUCT_BENEFITS,
  PRODUCT_USAGE_MODE,
  PRODUCT_DESCRIPTION,
  PRODUCT_CHARACTERISTICS,
  PRODUCT_EXTRA_INFORMATION
} from './constants'

/**
 * Create the Description item
 * @param {ProductByCode} product ProductByCode
 */
export function createDescriptionItem(product: ProductByCode) {
  return {
    label: 'Descripción',
    key: PRODUCT_DESCRIPTION,
    children: <Description description={product.description} />
  }
}

/**
 * Create the UsageMode item
 * @param {ProductByCode} product ProductByCode
 */
export function createUsageModeItem(product: ProductByCode) {
  return {
    label: 'Modo de Uso',
    key: PRODUCT_USAGE_MODE,
    children: <UsageMode usageMode={product.usageMode} />
  }
}

/**
 * Create the Benefits item
 * @param {ProductByCode} product ProductByCode
 */
export function createBenefitsItem(product: ProductByCode) {
  return {
    label: 'Beneficios',
    key: PRODUCT_BENEFITS,
    children: <Benefits benefits={product.benefits} />
  }
}

/**
 * Create the Characteristics item
 * @param {ProductByCode} product ProductByCode
 */
export function createCharacteristicsItem(product: ProductByCode) {
  return {
    label: 'Características',
    key: PRODUCT_CHARACTERISTICS,
    children: <Characteristics characteristics={product.characteristics} />
  }
}

/**
 * Create the Extra Information item
 * @param {ProductByCode} product ProductByCode
 */
export function createExtraInformationItem(product: ProductByCode) {
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
