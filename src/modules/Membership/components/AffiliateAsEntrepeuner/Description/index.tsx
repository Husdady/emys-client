// Utils
import classnames from '@utils/classnames'

// Constants
import { Lato } from '@data/fonts'

export default function Description() {
  return (
    <span className="mt-3 block">
      <span>
        En el contexto de Omnilife, un "empresario Omnilife" es alguien que se ha afiliado a la
        empresa para participar en su modelo de negocio multinivel como distribuidor independiente.
        Estos empresarios son también conocidos como "distribuidores" o "socios comerciales" de
        Omnilife.
      </span>
      <br />
      <br />

      <h3
        className={classnames([
          Lato.className,
          'dark:text-pink-200 text-[1.15rem] font-semibold dark:font-normal leading-tight mb-1.5 tracking-wide dark:font-lexend dark:tracking-[initial]'
        ])}
      >
        ¿Cómo me afilio como Empresario Omnilife?
      </h3>

      <span>
        Haga click en el botón <i>'Quiero afiliarme como Empresario Omnilfife'</i>. A continuación
        serás redirigido a un formulario en la página oficial de Omnilife donde debes llenar todos
        los campos requeridos para afiliarte como Empresario Omnilife.
      </span>
      <br />
      <br />
      <span>
        Al finalizar tu registro como Empresario Omnilife, recuerda que debes contactarte con
        nosotros a través de Whatsapp para hacernos saber sobre tu afiliación.
      </span>
    </span>
  )
}
