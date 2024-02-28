// Librarys
import Head from 'next/head'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'
import { ThemeConfig, ConfigProvider } from 'antd/lib'
import { PersistGate } from 'redux-persist/integration/react'

// Components
import OfflineView from '@components/OfflineView'

// Hooks
import useNetwork from '@root/src/hooks/useNetwork'
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

export const theme: ThemeConfig = {
  token: {
    motion: false
  }
}

export default function EmysApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  useNprogressDone()
  const isOnline = useNetwork()

  return (
    <>
      <Head>
        <title>{`${APP_NAME}, Variedad y Calidad`}</title>
      </Head>

      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ThemeProvider attribute="class">
            <ConfigProvider theme={theme}>
              {!isOnline && <OfflineView />}

              {isOnline && (
                <main className={fonts}>
                  <div id="global-mask"></div>
                  <Component {...pageProps} />
                </main>
              )}
            </ConfigProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  )
}
