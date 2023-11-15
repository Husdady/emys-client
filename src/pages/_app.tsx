// Librarys
import Head from 'next/head'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'next-themes'

// Types
import type { AppProps } from 'next/app'

// Store config
import { store, persistor } from '@config/store'

// Constants
import { APP_NAME } from '@config/envs'

// Styles
import '@styles/global.scss'

export default function EmysApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{APP_NAME}, Variedad y Calidad</title>
      </Head>

      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  )
}
