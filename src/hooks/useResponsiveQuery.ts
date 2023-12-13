// Hooks
import { useState } from 'react'
import useMounted from './useMounted'

/**
 * Hook for make responsive query
 * @param {number} query Query
 * @returns {boolean} Boolean
 */
export default function useResponsiveQuery(query: number): boolean {
  const [matches, setMatches] = useState(false)

  useMounted(() => {
    // Función que se ejecuta al cargar la página y al cambiar el tamaño de la ventana
    const handleResize = () => {
      setMatches(window.innerWidth <= query)
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
