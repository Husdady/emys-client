// Librarys
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'
import { ThemeConfig, ConfigProvider } from 'antd/lib'
import { PersistGate } from 'redux-persist/integration/react'

// Containers
import MainContainer from '@containers/MainContainer'

// Components
import ProgressBar from '@components/ProgressBar'

// Types
import type { AppProps } from 'next/app'

// Store config
import { store, persistor } from '@config/store'

// Styles
import '@styles/global.scss'

const theme: ThemeConfig = {
  token: {
    motion: false
  }
}

export default function EmysApp({ Component, pageProps: pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ThemeProvider attribute="class">
          <ConfigProvider theme={theme}>
            <MainContainer>
              <Component {...pageProps} />
              <ProgressBar />
            </MainContainer>
          </ConfigProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}
