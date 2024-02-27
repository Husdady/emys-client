// Components
import CustomProductFieldsTable from './Table'
import EmptyScreen from '@components/EmptyScreen'

// Hooks
import useCustomFields from './useCustomFields'

// Types
import type { CustomFieldsProps } from './types'

export default function CustomFields(props: CustomFieldsProps) {
  const { hasExtraInformation, hasCustomProductFields } = useCustomFields(props)

  if (!hasExtraInformation || !hasCustomProductFields) {
    return <EmptyScreen description="Este producto no posee información extra" />
  }

  return <CustomProductFieldsTable {...props} />
}
