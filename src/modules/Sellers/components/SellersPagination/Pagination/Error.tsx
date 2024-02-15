// Librarys
import { Suspense } from 'react'

// Components
import BoxWrapperFallback from '@components/Wrapper/Fallback'

// Utils
import lazy from '@utils/lazy'

// Constants
import { DEFAULT_IMAGE } from '@assets/data/error-image'

// Lazy Components
const Screen = lazy(() => import('@components/Screen'))
const BoxWrapper = lazy(() => import('@components/Wrapper'))

export const sharedClassName = 'max-w-[1100px] mx-6 xl:mx-auto'
export const customTitle = { className: 'text-main-500 dark:text-main-300' }

export default function ErrorSellers() {
  return (
    <Suspense fallback={<BoxWrapperFallback className={sharedClassName} />}>
      <BoxWrapper className={sharedClassName}>
        <Screen
          image={DEFAULT_IMAGE}
          customTitle={customTitle}
          title="Ah ocurrido un error al mostrar los Vendedores registrados"
          description="Parece que ha ocurrido un problema al mostrar los vendedores que han sido añadidos en la aplicación, este problema pudo haber sido ocasionado por un error de conexión a internet o algún error en nuestro sistema."
        />
      </BoxWrapper>
    </Suspense>
  )
}