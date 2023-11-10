// Librarys
import Head from 'next/head'

// Types
import type { AppProps } from 'next/app'

// Constants
import { APP_NAME } from '@config/envs'

// Styles
import '@styles/global.scss'

export default function EmysApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}
