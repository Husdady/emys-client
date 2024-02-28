// Components
import Photo from '@assets/icons/photo'

export default function EmptyImages() {
  return (
    <section className="empty-images text-justify h-full flex flex-col items-center justify-center gap-y-3.5 mt-1 pt-8 pb-7 lg:pt-0 lg:pb-0 lg:mt-0">
      <div className="w-[300px] min-w-[300px] max-w-[300px] h-[400px] min-h-[400px] max-h-[400px] bg-gray-100 flex items-center justify-center dark:bg-gray-700 dark:text-gray-200 rounded">
        <Photo size="bigger" />
      </div>

      <span className="max-w-[350px] text-base leading-snug text-gray-600 dark:text-gray-300">
        El vendedor no ha añadido imágenes de este producto. Si no es un vendedor anónimo, puedes
        contactarle por sus redes sociales o por Whatsapp, solicita imágenes del producto.
      </span>
    </section>
  )
}
