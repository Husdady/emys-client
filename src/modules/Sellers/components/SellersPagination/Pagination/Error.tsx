// Components
import ErrorScreen from '@components/ErrorScreen'

export default function ErrorSellers() {
  return (
    <ErrorScreen
      title="Ah ocurrido un error al mostrar los Vendedores registrados"
      description="Parece que ha ocurrido un problema al mostrar los vendedores que han sido registrados en la aplicación, este problema pudo haber sido ocasionado por un error de conexión a internet o algún error en nuestro sistema."
    />
  )
}
