// Librarys
import { Suspense } from 'react'

// Components
import BoxWrapperFallback from '@components/Wrapper/Fallback'

// Utils
import lazy from '@utils/lazy'

// Constants
// import { DEFAULT_IMAGE } from '@routes/ErrorRoute/constants'

// Lazy Components
const Screen = lazy(() => import('@components/Screen'))
const BoxWrapper = lazy(() => import('@components/Wrapper'))

export const customTitle = { className: 'text-main-500 dark:text-main-300' }

export default function ErrorTestimonials() {
  return (
    <Suspense fallback={<BoxWrapperFallback />}>
      <BoxWrapper>
        <Screen
          // image={DEFAULT_IMAGE}
          customTitle={customTitle}
          title="Ah ocurrido un error al mostrar los testimonios Omnilife añadidos"
          description="Parece que ha ocurrido un problema al mostrar los testimonios Omnilife que han sido añadidos en la aplicación, este problema pudo haber sido ocasionado por un error de conexión a internet o algún error en nuestro sistema."
        />
      </BoxWrapper>
    </Suspense>
  )
}
