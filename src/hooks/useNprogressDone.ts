// Librarys
import Router from 'next/router'
import NProgress from 'nprogress'

// Hooks
import useMounted from './useMounted'

/**
 * Hook for hide the Nprogress bar
 */
export default function useNprogressDone() {
  useMounted(() => {
    Router.events.off('routeChangeStart', () => {
      NProgress.start() // Asegúrate de desvincular el evento al desmontar el componente
    })

    Router.events.off('routeChangeComplete', () => {
      NProgress.done() // Asegúrate de desvincular el evento al desmontar el componente
    })

    Router.events.off('routeChangeError', () => {
      NProgress.done() // Asegúrate de desvincular el evento al desmontar el componente
    })
  }, [])
}
