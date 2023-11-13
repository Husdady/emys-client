// Librarys
import Head from 'next/head'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

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
        <title>{APP_NAME}</title>
      </Head>

      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}
