// Librarys
import dynamic from 'next/dynamic'
import useUserAuthenticated from './useUserAuthenticated'

// Dynamic Components
const User = dynamic(() => import('@components/Header/User'))
const FloatMenu = dynamic(() => import('@components/Header/User/FloatMenu'))

export default function UserAuthenticated() {
  const { user, menuData } = useUserAuthenticated()

  return (
    <>
      <User menuData={menuData} className="!mr-0 h-[35px] w-[35px] min-w-[35px] min-h-[35px]" />
      <FloatMenu {...menuData} />
    </>
  )
}
