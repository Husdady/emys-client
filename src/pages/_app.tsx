// Librarys
import Head from 'next/head'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'
import { Online, Offline } from 'react-detect-offline'
import { PersistGate } from 'redux-persist/integration/react'

// Components
import OfflineView from '@components/OfflineView'

// Hooks
import useNprogressDone from '@hooks/useNprogressDone'

// Types
import type { AppProps } from 'next/app'

// Store config
import { store, persistor } from '@config/store'

// Data
import fonts from '@assets/data/fonts'
import { APP_NAME } from '@config/envs'

// Styles
import '@styles/global.scss'

export default function EmysApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  useNprogressDone()

  return (
    <>
      <Head>
        <title>{`${APP_NAME}, Variedad y Calidad`}</title>
      </Head>

      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ThemeProvider attribute="class">
            <Online>
              <main className={fonts}>
                <Component {...pageProps} />
              </main>
            </Online>

            <Offline>
              <OfflineView />
            </Offline>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  )
}
