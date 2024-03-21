// Components
import AlertMessage from '@components/AlertMessage'

export default function OmnilifeMessage() {
  return (
    <div className="mb-5 sm:mb-0 mt-1.5 sm:mt-5 xl:mt-4">
      <AlertMessage>
        NOTA IMPORTANTE: Los productos Omnilife y Seytú tiene una regla de ética, en la cuál no se
        permite vender directamente por línea estos productos. Cada uno de estos productos serán
        vendidos internamente, contactando y coordinando con el vendedor o vendedora.
      </AlertMessage>
    </div>
  )
}
