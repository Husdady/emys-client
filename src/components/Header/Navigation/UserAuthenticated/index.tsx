// Librarys
import dynamic from 'next/dynamic'
import { createPortal } from 'react-dom'

// Hooks
import useUserAuthenticated from './useUserAuthenticated'

// Dynamic Components
const User = dynamic(() => import('@components/Header/User'))

export default function UserAuthenticated() {
  const { menuData } = useUserAuthenticated()

  return <User menuData={menuData} className="!mr-0 h-[35px] w-[35px] min-w-[35px] min-h-[35px]" />
}
