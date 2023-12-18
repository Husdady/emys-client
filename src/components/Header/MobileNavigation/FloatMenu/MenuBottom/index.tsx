// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Dynamic Components
const Author = dynamic(() => import('./Author'))
const SignOut = dynamic(() => import('./SignOut'))

function MenuBottom() {
  return (
    <div className="mt-3 h-[calc(38vh-0.75rem)]">
      <hr className="h-[2px] border-none bg-gray-300/30 dark:bg-gray-700" />

      <div className="menu-left-bottom pt-4 px-4 pb-3">
        <SignOut />
        <Author />
      </div>
    </div>
  )
}

export default memo(MenuBottom)
