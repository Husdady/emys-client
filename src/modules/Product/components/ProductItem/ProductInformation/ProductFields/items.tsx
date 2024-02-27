// Components
import Benefits from './components/Benefits'
import UsageMode from './components/UsageMode'
import Description from './components/Description'
import CustomFields from './components/CustomFields'
import MainInformation from './components/MainInformation'
import Characteristics from './components/Characteristics'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

// Constants
import {
  PRODUCT_BENEFITS,
  PRODUCT_USAGE_MODE,
  PRODUCT_DESCRIPTION,
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
