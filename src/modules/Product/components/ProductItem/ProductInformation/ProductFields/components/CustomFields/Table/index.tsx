// Components
import Table from '@modules/Product/components/Table'

// Hooks
import useTable from './useTable'

// Types
import type { CustomFieldsProps } from '../types'

export default function CustomProductFieldsTable(props: CustomFieldsProps) {
  const { items } = useTable(props)
  return <Table items={items} />
}
