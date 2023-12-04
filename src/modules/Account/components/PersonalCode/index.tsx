// Librarys
import dynamic from 'next/dynamic'

// Components
import Button from './Button'

// Dynamic Components
const Aside = dynamic(() => import('@modules/Account/components/Aside'))

export default function PersonalCode() {
  return (
    <Aside
      title="Código personal"
      className="items-center px-4 py-6 sm:px-6"
      titleClassName="text-blue-500 dark:text-sky-300"
      description="Sólo por seguridad, se te pedirá tu código personal si olvidas tu correo electrónico. Por lo tanto, te recomendamos que lo guardes en un lugar seguro."
    >
      <Button />
    </Aside>
  )
}
