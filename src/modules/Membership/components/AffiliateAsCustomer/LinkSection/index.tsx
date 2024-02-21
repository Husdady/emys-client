// Components
import Link from './Link'

export default function DownloadMembershipPDF() {
  return (
    <div className="ml-auto flex flex-col justify-center gap-y-1.5">
      <h5 className="font-lexend text-lg leading-tight mb-1.5 dark:text-pink-200">Presiona el botón para navegar al formulario</h5>

      <span className="block font-lexend text-gray-600 dark:text-gray-400 mb-5">
        Al navegar al formulario, tendrás que llenar tus datos personales como tu nombre y apellidos, sexo, fecha de nacimiento, entre otros campos. Recuerda llenar adecuadamente el formulario con datos válidos.
      </span>

      <Link />
    </div>
  )
}
