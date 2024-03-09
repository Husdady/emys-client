// Components
import World from '@components/Icons/World'

// Interfaces
import { Testimony } from '@modules/Testimonials/api/interfaces'

// Hooks
import useUbigeoFields from './useUbigeoFields'

export default function UbigeoFields(
  props: Pick<Testimony, 'region' | 'country' | 'province' | 'district'>
) {
  const { ubigeoValues } = useUbigeoFields(props)

  return (
    <section className="mt-1 w-full ubigeo-fields flex flex-nowrap items-center gap-y-2 gap-x-[0.2rem] text-[0.9rem] dark:text-gray-200 truncate">
      <World size="xsm" />
      <span className="truncate">{ubigeoValues}</span>
    </section>
  )
}
