// Librarys
import dynamic from 'next/dynamic'

// Dynamic Components
const Status = dynamic(() => import('./Status'))
const Aside = dynamic(() => import('@modules/Account/components/Aside'))

export default function AccountStatus() {
  return (
    <Aside
      title="Estado de la cuenta"
      className="items-center px-4 py-6 sm:px-6"
      titleClassName="text-emerald-500 dark:!text-emerald-300"
      description="Es importante saber el estado actual de tu cuenta. Actualmente existen 3 estados de cuenta 'VERIFICADA', 'NO VERIFICADA' y 'BLOQUEADA'."
    >
      <Status />
    </Aside>
  )
}
