// Librarys
import dynamic from 'next/dynamic'

// Components
import ChevronRight from '@assets/icons/chevron-right'

// Hooks
import { useCallback } from 'react'
import { useRouter } from 'next/router'

// Interfaces
import { ResultProps } from './interfaces'

// Dynamic Components
const Link = dynamic(() => import('@components/Link'))

export default function Result({ icon, path, title, hideResults }: ResultProps) {
  const { pathname } = useRouter()

  // Event click on Link component
  const handleClick = useCallback((routePath: string) => {
    if (!pathname.includes(routePath)) return
    hideResults() // Execute the callback that hide the results

    if (window.innerWidth >= 1200) return // Stop callback execution
    const menuLeft = document.getElementById('menu-left') // Get Menu Left
    if (menuLeft === null) return // Check if Menu Left exists

    menuLeft.classList.remove('active') // Hide Menu Left
  }, [])

  return (
    <li className="navigation-seeker-item">
      <Link
        href={path}
        onClick={() => handleClick(path as string)}
        title={`Navegar a la ruta '${String(path)}'`}
        className="navigation-seeker-link break-word flex my-2 items-center px-3 py-[0.85rem] gap-x-12 justify-between border-l-[5px] text-main-700 hover:text-main-700 border-main-700 bg-main-700/5 hover:bg-main-700/10 dark:bg-main-200/10 dark:hover:bg-main-200/20 dark:border-main-200 dark:text-main-200 font-semibold dark:font-normal dark:font-semibold"
      >
        <div className="flex items-center gap-x-2">
          {icon}

          <span className="text font-poppins leading-relaxed text-[0.93rem] break-word">
            {title}
          </span>
        </div>

        <ChevronRight size="smaller" className="stroke-4 text-main-700 dark:text-main-200" />
      </Link>
    </li>
  )
}
