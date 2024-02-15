// Interfaces
import { UbigeoFiltersProps } from '@modules/Ubigeo/components/UbigeoFilters/interfaces'

// Constants
import {
  REGION_FIELD,
  COUNTRY_FIELD,
  DISTRICT_FIELD,
  PROVINCE_FIELD
} from '@modules/Ubigeo/components/UbigeoFilters/constants'

export const ubigeoConfigFilters: UbigeoFiltersProps['config'] = {
  // Country settings
  [COUNTRY_FIELD]: {
    noSelectionLabel: 'Filtrar vendedores por país'
  },

  // Region settings
  [REGION_FIELD]: {
    noSelectionLabel: 'Filtrar vendedores por región'
  },

  // Province settings
  [PROVINCE_FIELD]: {
    noSelectionLabel: 'Filtrar vendedores por provincia'
  },

  // District settings
  [DISTRICT_FIELD]: {
    noSelectionLabel: 'Filtrar vendedores por distrito'
  }
}
