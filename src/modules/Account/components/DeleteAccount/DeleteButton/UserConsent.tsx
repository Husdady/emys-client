// Components
import Separator from '@components/Separator'
import ConfirmForm from '@modules/Account/components/DeleteAccount/ConfirmForm'

export default function UserConsent() {
  return (
    <>
      <p className="text-gray-700 dark:text-gray-400 text-lg font-poppins mb-2 font-semibold">
        *Aviso importante
      </p>

      <p className="text-gray-400 text-lg leading-snug font-poppins tracking-tight">
        Antes de eliminar tu cuenta, necesitamos que nos proporciones tu contraseña para poder
        continuar. Además de completar un campo de verificación.
      </p>

      <Separator className="mx-0" />
      <ConfirmForm />
    </>
  )
}
