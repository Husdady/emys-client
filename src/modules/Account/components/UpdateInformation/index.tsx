// Librarys
import dynamic from 'next/dynamic'

// Components
import Form from './Form'

// Dynamic Components
const Aside = dynamic(() => import('@modules/Account/components/Aside'))

export default function UpdateInformation() {
  return (
    <Aside
      className="p-6 sm:py-8 sm:px-6"
      title="Modificar mis datos personales"
      description="Aquí podrás actualizar tu nombre de usuario, tu foto de perfil y tu correo electrónico. Al actualizar los datos correctamente, se enviará una verificación a tu nuevo correo electrónico."
    >
      <Form />
    </Aside>
  )
}
