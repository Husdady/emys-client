// Interfaces
import { UbigeoFiltersProps } from '@modules/Ubigeo/components/UbigeoFilters/interfaces'

// Constants
import {
  REGION_FIELD,
  COUNTRY_FIELD,
  DISTRICT_FIELD,
  PROVINCE_FIELD
} from '@modules/Ubigeo/components/UbigeoFilters/constants'

export const FILTERING_TESTIMONIALS = 'FILTERING_TESTIMONIALS'
export const ERROR_MESSAGE_FILTERS = 'Ah ocurrido un error al filtrar las testimonios'

export const SUCCESS_MESSAGE_FILTERS =
  'Se han aplicado los filtros correctamente en los testimonios'

export const LOADING_FILTERS = {
  key: FILTERING_TESTIMONIALS,
  content: 'Cargando filtros de testimonios...'
}

export const ubigeoConfigFilters: UbigeoFiltersProps['config'] = {
  // Country settings
  [COUNTRY_FIELD]: {
    classLabelPlaceholder: 'w-32',
    textLabel: 'Filtrar testimonios por país'
  },

  // Region settings
  [REGION_FIELD]: {
    classLabelPlaceholder: 'w-36',
    textLabel: 'Filtrar testimonios por región'
  },

  // Province settings
  [PROVINCE_FIELD]: {
    classLabelPlaceholder: 'w-40',
    textLabel: 'Filtrar testimonios por provincia'
  },

  // District settings
  [DISTRICT_FIELD]: {
    classLabelPlaceholder: 'w-40',
    textLabel: 'Filtrar testimonios por distrito'
  }
}
