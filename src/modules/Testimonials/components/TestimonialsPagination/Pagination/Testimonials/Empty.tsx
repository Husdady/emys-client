// Librarys
import { Suspense } from 'react'
import Empty from 'antd/lib/empty'

// Components
import Fallback from '@components/Wrapper/Fallback'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const BoxWrapper = lazy(() => import('@components/Wrapper'))

export const customTitle = { className: 'text-main-500' }

export default function EmptySocialNetworks() {
  return (
    <Suspense fallback={<Fallback />}>
      <BoxWrapper className="w-full">
        <Empty
          className="font-poppins w-full xl:w-5/12 !mx-auto text-lg py-4"
          description="Aún no se han agregado redes sociales en la aplicación... ¿Por qué no agregas una red social?"
        />
      </BoxWrapper>
    </Suspense>
  )
}
