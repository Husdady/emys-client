// Components
import DownloadButton from './DownloadButton'

export default function DownloadMembershipPDF() {
  return (
    <div className="ml-auto flex flex-col justify-center gap-y-1.5">
      <h5 className="font-lexend text-lg leading-tight mb-1.5 dark:text-pink-200">Presiona el botón para descargar el PDF</h5>

      <span className="block font-lexend text-gray-600 dark:text-gray-400 mb-5">
        Recuerda que al presionar el botón, se descargará una copia del PDF de Programa de
        Afiliados. Vamos a estar actualizando el PDF cada vez que surjan cambios en el &apos;Plan de
        Recompensas Omnilife&apos;.
      </span>

      <DownloadButton />
    </div>
  )
}
