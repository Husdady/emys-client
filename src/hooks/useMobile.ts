// Hooks
import { useState } from 'react'
import useMounted from './useMounted'

export const MEDIA_QUERY_FOR_MOBILE_DEVICES = 1200

/**
 * Hook for check if is mobile device
 * @returns {boolean} Boolean
 */
export default function useMobile(): boolean {
  const [matches, setMatches] = useState(false)

  useMounted(() => {
    // Función que se ejecuta al cargar la página y al cambiar el tamaño de la ventana
    const handleResize = () => {
      setMatches(window.innerWidth <= MEDIA_QUERY_FOR_MOBILE_DEVICES)
    }

    // Configurar el evento de cambio de tamaño
    window.addEventListener('resize', handleResize)

    // Llamar a la función inicialmente para establecer el estado inicial
    handleResize()

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return matches
}
