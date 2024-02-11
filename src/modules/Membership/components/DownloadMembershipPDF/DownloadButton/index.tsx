// Librarys
import dynamic from 'next/dynamic'

// Components
import PDF from '@assets/icons/pdf'

// Hooks
import useDownloadButton from './useDownloadButton'

// Dynamic Components
const Button = dynamic(() => import('@components/Button'))

export default function DownloadButton() {
  const downloadPDF = useDownloadButton()

  return (
    <Button
      onClick={downloadPDF}
      icon={<PDF size="md" />}
      title="Descargar PDF sobre el Programa de Afiliados"
      className="!py-3 !px-4 bg-sky-500 hover:bg-blue-600 dark:hover:bg-yellow-200 dark:bg-sky-200 text-white rounded-xl dark:text-sky-900 dark:font-semibold"
    />
  )
}