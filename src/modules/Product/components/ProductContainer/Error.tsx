// Components
import ErrorScreen from '@components/ErrorScreen'

export default function ProductError() {
  return (
    <ErrorScreen
      title="Ah ocurrido un error al mostrar la información del producto"
      description="Parece que ha ocurrido un problema al mostrar la información del producto, este problema pudo haber sido ocasionado por un error de conexión a internet o algún error en nuestro sistema."
    />
  )
}
