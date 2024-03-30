// Librarys
import { createId } from '@libs/nanoid'

// Interfaces
import { FallbackProps } from './interfaces'

// Utils
import createList from '@utils/createList'

const MIN_ITEMS = 3
type Params = Pick<FallbackProps, 'config'>

/**
 * Create items for the Fallback component
 * @param {Params} params Params
 */
export default function createItems({ config }: Params) {
  const items = createList(config?.length ?? MIN_ITEMS)

  return items.map((i) => ({
    ...(config?.[i - 1] ?? {}),
    id: config?.[i - 1]?.id ?? createId()
  }))
}
