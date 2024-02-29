// Components
import AlertMessage from '@components/AlertMessage'

export default function OmnilifeMessage() {
  return (
    <div className="mt-4">
      <AlertMessage>
        NOTA IMPORTANTE: Los productos Omnilife y Seytú tiene una regla de ética, en la cuál no se
        permite vender directamente por línea estos productos. Cada uno de estos productos serán
        vendidos internamente, contactando y coordinando con un vendedor o vendedora.
      </AlertMessage>
    </div>
  )
}
