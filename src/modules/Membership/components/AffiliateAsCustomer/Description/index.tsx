// Utils
import classnames from '@utils/classnames'

// Constants
import { Lato } from '@data/fonts'

export default function Description() {
  return (
    <span className="mt-3 block">
      <span>
        En el contexto de Omnilife, un "Cliente Admirable" es aquel que realiza compras recurrentes
        de los productos de la empresa y está satisfecho con la calidad y los beneficios de los
        productos.
      </span>
      <br />
      <br />

      <h3
        className={classnames([
          Lato.className,
          'dark:text-pink-200 text-[1.15rem] font-semibold dark:font-normal leading-tight mb-1.5 tracking-wide dark:font-lexend dark:tracking-[initial]'
        ])}
      >
        ¿Cómo me afilio como Cliente Admirable?
      </h3>

      <span>
        Haga click en el botón <i>'Quiero afiliarme como Cliente Admirable'</i>. A continuación
        serás redirigido a un formulario en la página oficial de Omnilife donde debes llenar todos
        los campos requeridos para afiliarte como Cliente Admirable.
      </span>
      <br />
      <br />
      <span>
        Al finalizar tu registro como Cliente Admirable, recuerda que debes contactarte con nosotros
        a través de Whatsapp para hacernos saber sobre tu afiliación.
      </span>
    </span>
  )
}
