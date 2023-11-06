// Librarys
import { Html, Head, Main, NextScript } from 'next/document'

// Components
import Favicons from '@components/Favicons'

// Constants
import { APP_NAME } from '@config/envs'

// Data
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

      <title>{APP_NAME}</title>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
