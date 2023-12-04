// Librarys
import { Suspense } from 'react'

// Components
import Form from './Form'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const Aside = lazy(() => import('@modules/Account/components/Aside'))

export default function UpdatePassword() {
  return (
    <Suspense fallback={<div className="h-28" />}>
      <Aside
        className="p-6 sm:py-8 sm:px-6"
        title="Actualizar mi contraseña"
        description="Aquí podrás actualizar tu contraseña, para ello deberás ingresar tu actual contraseña y una nueva contraseña. Recuerda ingresar una contraseña segura para evitar robos de información."
      >
        <Form />
      </Aside>
    </Suspense>
  )
}
