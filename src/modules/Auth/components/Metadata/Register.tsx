// Librarys
import Head from 'next/head'

// Utils
import createTitlePage from '@utils/createTitlePage'

export default function Metadata() {
  return (
    <Head>
      <title>{createTitlePage('Crear nueva cuenta')}</title>
    </Head>
  )
}