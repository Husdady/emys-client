// Types
import type { AppProps } from 'next/app'

// Styles
import '@styles/global.scss'

export default function EmysApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
