// Components
import World from '@components/Icons/World'

// Utils
import truncate from '@utils/truncate'

export const MAX_LIMIT = 20

export default function UbigeoName(ubigeo: string) {
  return (
    <b className="font-poppins flex items-center justify-center gap-x-1.5 text-gray-600 dark:text-gray-200 whitespace-nowrap dark:!font-normal break-word leading-snug">
      <World size="sm" />
      {truncate(ubigeo ?? 'No definido', MAX_LIMIT)}
    </b>
  )
}
