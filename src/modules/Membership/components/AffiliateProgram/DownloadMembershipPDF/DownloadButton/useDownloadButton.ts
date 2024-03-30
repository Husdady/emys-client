// Hooks
import { useCallback } from 'react'

const PDF_PATH = '/pdfs/membership-omnilife.pdf'

/**
 * Hook for implements the logic of the DownloadButton components
 */
export default function useDownloadButton() {
  // Callback for download the PDF
  const downloadPDF = useCallback(() => {
    const link = document.createElement('a')
    link.href = PDF_PATH
    link.download = PDF_PATH
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  return downloadPDF
}
