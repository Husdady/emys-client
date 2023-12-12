// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Dynamic Components
const Author = dynamic(() => import('./Author'))
const SignOut = dynamic(() => import('./SignOut'))

function MenuBottom() {
  return (
    <div className="mt-3">
      <hr className="h-[2px] border-none bg-gray-300/30 dark:bg-gray-700" />

      <div className="menu-left-bottom p-4">
        <SignOut />
        <Author />
      </div>
    </div>
  )
}

export default memo(MenuBottom)
