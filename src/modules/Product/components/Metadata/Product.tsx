// Librarys
import Head from 'next/head'

// Utils
import createTitlePage from '@utils/createTitlePage'

interface MetadataProps {
  productName?: string
}

export default function Metadata({ productName }: MetadataProps) {
  return (
    <Head>
      <title>{createTitlePage(productName ?? 'Producto misterioso')}</title>
    </Head>
  )
}
