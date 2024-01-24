// Librarys
import { Suspense } from 'react'

// Components
import Power from '@assets/icons/power'

// Hooks
import useDeleteButton from './useDeleteButton'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const Button = lazy(() => import('@components/Button'))

export default function DeleteAccountButton() {
  const { handleGetUserConsent } = useDeleteButton()

  return (
    <Suspense fallback={null}>
      <Button
        title="Eliminar mi cuenta"
        className="!py-3 !px-4 ml-auto bg-red-600 hover:bg-rose-500 dark:hover:bg-rose-600 dark:bg-red-700 text-white rounded-xl"
        icon={<Power size="sm" className="stroke-3" />}
        onClick={handleGetUserConsent}
      />
    </Suspense>
  )
}
