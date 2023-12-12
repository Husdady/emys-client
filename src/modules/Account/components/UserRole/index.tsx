// Librarys
import dynamic from 'next/dynamic'

// Hooks
import useAuth from '@hooks/useAuth'

// Utils
import isUndefined from '@utils/isUndefined'

// Dynamic Components
const Role = dynamic(() => import('@components/Role'))
const Aside = dynamic(() => import('@modules/Account/components/Aside'))

export default function UserRole() {
  const auth = useAuth()

  if (auth.user === null) return null
  if (auth.user.role === null) return null
  if (isUndefined(auth.user.role)) return null

  return (
    <Aside
      title="Rol del usuario"
      className="items-center px-4 py-6 sm:px-6"
      titleClassName="text-purple-600 dark:text-purple-300"
      description="Dependiendo del rol que tengas asignado, podrás realizar ciertas acciones. Mientras más permisos se te hayan asignado, más actividades podrás realizar."
    >
      <Role name={auth.user.role.name} className="float-right" />
    </Aside>
  )
}
