// Librarys
import { Suspense } from 'react'

// Components
import Fallback from './Fallback'
import HeartRegular from '@components/Icons/HeartRegular'

// Hooks
import useAddProductToFavorites from './useAddProductToFavorites'

// Utils
import lazy from '@utils/lazy'
import classnames from '@utils/classnames'

// Lazy Components
const Button = lazy(() => import('@components/Button'))

export default function AddProductToFavorites() {
  // const { goToPath } = useAddProductToFavorites({ path: path })

  return (
    <Suspense fallback={<Fallback />}>
      <Button
        title="Añadir producto a favoritos"
        // onClick={goToPath}
        icon={<HeartRegular size="smd" className="stroke-3" />}
        className={classnames([
          'gap-x-2.5 btn-back-button bg-white shadow-lg text-main-700 py-2.5 rounded-2xl hover:opacity-70 dark:text-rose-300 dark:bg-gray-800 font-semibold min-h-[46px] sm:min-h-[42px]'
        ])}
      />
    </Suspense>
  )
}
