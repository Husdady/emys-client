// Components
import ErrorScreen from '@components/ErrorScreen'

export default function ErrorProducts() {
  return (
    <ErrorScreen
      title="Ah ocurrido un error al mostrar los productos"
      description="Parece que ha ocurrido un problema al mostrar los productos que han sido añadidos en la aplicación, este problema pudo haber sido ocasionado por un error de conexión a internet o algún error en nuestro sistema."
    />
  )
}
