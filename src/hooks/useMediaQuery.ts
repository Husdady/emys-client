// Hooks
import { useState } from 'react'
import useMounted from './useMounted'

/**
 * Hook for implements Media Query validations
 * @param {number} windowWidth Window width
 * @returns {boolean} Boolean
 */
export default function useMediaQuery(windowWidth: number): boolean {
  const [matches, setMatches] = useState(false)

  useMounted(() => {
    // Función que se ejecuta al cargar la página y al cambiar el tamaño de la ventana
    const handleResize = () => {
      setMatches(window.innerWidth <= windowWidth)
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
