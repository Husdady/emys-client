// Components
import ErrorScreen from '@components/ErrorScreen'
import Metadata from '@modules/Product/components/Metadata/ProductNotFound'

export default function ProductError() {
  return (
    <div className='mb-5'>
      <Metadata />

      <ErrorScreen
        title="Ah ocurrido un error al mostrar la información del producto"
        description="Parece que ha ocurrido un problema al mostrar la información del producto, este problema pudo haber sido ocasionado por un error de conexión a internet o algún error en nuestro sistema."
      />
    </div>
  )
}
