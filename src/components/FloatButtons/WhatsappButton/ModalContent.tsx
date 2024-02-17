// Components
import Link from '@components/Link'
import BrandWhatsapp from '@assets/icons/brand-whatsapp'

// Constants
import { whatsappNumbers } from './constants'

export default function ModalContent() {
  return (
    <div className="font-poppins whatsapp-numbers-content font-semibold text-gray-600 dark:text-gray-300">
      <p>A continuación te proporcionamos nuestros números para contactar por Whatsapp:</p>

      <ul className="whatsapp-numbers my-4 flex flex-col gap-y-2">
        {whatsappNumbers.map((whatsappNumber) => (
          <li className="whatsapp-number-item text-lime-600 bg-lime-100 py-2 px-3 rounded-lg dark:bg-lime-400 dark:text-lime-900">
            <Link
              href={whatsappNumber.link}
              className="whatsapp-number-link flex items-center gap-x-1.5 dark:hover:text-sky-600 hover:underline"
            >
              <BrandWhatsapp size="sm" />
              <span className="whatsapp-number">Enviar mensaje a {whatsappNumber.number}</span>
            </Link>
          </li>
        ))}
      </ul>

      <p>
        Estos son nuestros números principales, toda duda o consulta la puedes hacer a travéz de
        estos números que te hemos proporcionado.
      </p>
    </div>
  )
}
