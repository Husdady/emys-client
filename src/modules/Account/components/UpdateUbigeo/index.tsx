// Librarys
import dynamic from 'next/dynamic'

// Components
import Form from './Form'

// Lazy Components
const Aside = dynamic(() => import('@modules/Account/components/Aside'))

export default function UpdateUbigeo() {
  return (
    <Aside
      className="p-6 sm:py-8 sm:px-6"
      title="Actualizar mi ubigación"
      description="Aquí podrás seleccionar tu país, ciudad natal, provincia y distrito. Recuerda ingresar correctamente tus datos geográficos."
    >
      <Form />
    </Aside>
  )
}
