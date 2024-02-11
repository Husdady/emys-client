// Librarys
import { Suspense } from 'react'

// Components
import Fallback from './Fallback'
import Plus from '@assets/icons/plus'

// Hooks
import useShowModalForAddMyTestimony from './useShowModalForAddTestimony'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const Button = lazy(() => import('@components/Button'))

export default function AddMyTestimony() {
  const show = useShowModalForAddMyTestimony()

  return (
    <div className="mb-3 flex justify-end add-my-testimony-wrapper max-w-[1150px] mx-[2rem]">
      <Suspense fallback={<Fallback />}>
        <Button
          onClick={show}
          icon={<Plus size="md" />}
          title="Añadir mi testimonio"
          className="gap-x-4 btn-add-my-testimony bg-white shadow-lg text-main-700 py-2.5 rounded-2xl hover:opacity-70 dark:text-rose-300 dark:bg-gray-800 font-semibold"
        />
      </Suspense>
    </div>
  )
}
