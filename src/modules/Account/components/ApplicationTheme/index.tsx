// Librarys
import dynamic from 'next/dynamic'

// Dynamic Components
const SwitchTheme = dynamic(() => import('@components/SwitchTheme'))
const Aside = dynamic(() => import('@modules/Account/components/Aside'))

export default function ApplicationTheme() {
  return (
    <Aside
      title="Tema por defecto"
      className="items-center px-4 py-6 sm:px-6"
      titleClassName="text-sky-500 dark:text-yellow-400"
      description="Define el tema que más te guste. Un tema claro, es resaltante por las sombras y los colores blancos de fondo y colores oscuros en texto. El tema oscuro es una buena opción para descansar la vista."
    >
      <SwitchTheme />
    </Aside>
  )
}
