// Librarys
import { Suspense } from 'react'

// Components
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
      <Suspense fallback={<div className="w-[224px] h-[42px] rounded-2xl bg-rose-600"></div>}>
        <Button
          onClick={show}
          icon={<Plus size="md" />}
          title="Añadir mi testimonio"
          className="gap-x-4 btn-add-my-testimony bg-rose-600 py-2.5 rounded-2xl hover:bg-rose-500 text-white"
        />
      </Suspense>
    </div>
  )
}
