// Librarys
import { Html, Head, Main, NextScript } from 'next/document'

// Components
import Favicons from '@components/Favicons'

// Data
import fonts from '@root/src/assets/data/fonts'
import pk from '@root/package.json'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta name="author" content={pk.author.name} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/img/emprendimientoysalud.webp" />
        <Favicons />
      </Head>

      <body className={fonts}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
