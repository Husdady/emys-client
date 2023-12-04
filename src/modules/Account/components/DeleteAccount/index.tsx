// Librarys
import { Suspense } from 'react'

// Components
import DeleteButton from './DeleteButton'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const Aside = lazy(() => import('@modules/Account/components/Aside'))

export default function DeleteAccount() {
  return (
    <Suspense fallback={<div className="h-24" />}>
      <Aside
        title="¿Deseas eliminar tu cuenta?"
        className="items-center px-4 py-6 sm:px-6"
        titleClassName="text-red-600 dark:!text-red-400"
        description="Si deseas eliminar tu cuenta, presione el botón 'Eliminar mi cuenta'. Recuerda que esta acción es inminente y eliminará definitivamente tu cuenta."
      >
        <DeleteButton />
      </Aside>
    </Suspense>
  )
}
