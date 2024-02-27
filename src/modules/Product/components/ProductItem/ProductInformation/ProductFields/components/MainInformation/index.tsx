// Components
import Table from '@modules/Product/components/Table'

// Hooks
import useMainInformation from './useMainInformation'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

export default function MainInformation(props: Product) {
  const { items } = useMainInformation(props)
  return <Table items={items} />
}
