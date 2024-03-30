// Librarys
import { createId } from '@libs/nanoid'

// Interfaces
import { UbigeoFiltersProps } from '@modules/Ubigeo/components/UbigeoFilters/interfaces'

// Constants
import {
  REGION_FIELD,
  COUNTRY_FIELD,
  DISTRICT_FIELD,
  PROVINCE_FIELD
} from '@modules/Ubigeo/components/UbigeoFilters/constants'

export const SELLERS_FILTERS_FORM_ID = `sellers-filters-${createId()}`

export const ubigeoConfigFilters: UbigeoFiltersProps['config'] = {
  // Country settings
  [COUNTRY_FIELD]: {
    classLabelPlaceholder: 'w-32',
    textLabel: 'Filtrar vendedores por país'
  },

  // Region settings
  [REGION_FIELD]: {
    classLabelPlaceholder: 'w-36',
    textLabel: 'Filtrar vendedores por región'
  },

  // Province settings
  [PROVINCE_FIELD]: {
    classLabelPlaceholder: 'w-40',
    textLabel: 'Filtrar vendedores por provincia'
  },

  // District settings
  [DISTRICT_FIELD]: {
    classLabelPlaceholder: 'w-40',
    textLabel: 'Filtrar vendedores por distrito'
  }
}
