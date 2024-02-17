// Components
import ErrorScreen from '@components/ErrorScreen'

export default function ErrorProducts() {
  return (
    <ErrorScreen
      title="Ah ocurrido un error al mostrar tus productos favoritos"
      description="Parece que ha ocurrido un problema al mostrar tus productos favoritos que haz añadido, este problema pudo haber sido ocasionado por un error de conexión a internet o algún error en nuestro sistema."
    />
  )
}
