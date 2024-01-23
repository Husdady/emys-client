// Components
import Button from '@components/Button'

// Hooks
import useShowModalForReadTestimony from './useShowModalForReadTestimony'

// Interfaces
import { Testimony } from '@modules/Testimonials/api/interfaces'

export default function ReadTestimony(props: Partial<Testimony>) {
  const show = useShowModalForReadTestimony(props as Testimony)

  return (
    <Button
      onClick={show}
      title="Leer testimonio completo"
      className="mt-4 py-3 rounded-full bg-main-700 dark:bg-pink-300 text-white dark:text-gray-800 dark:font-semibold hover:bg-rose-500 dark:hover:bg-pink-200"
    />
  )
}
