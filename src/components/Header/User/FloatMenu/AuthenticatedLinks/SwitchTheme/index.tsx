// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Components
import Brush from '@components/Icons/Brush'

// Hooks
import useSwitchTheme from './useSwitchTheme'

// Dynamic Components
const SwitchTheme = dynamic(() => import('@components/SwitchTheme'))

function CustomSwitchTheme() {
  const { handleChangeTheme } = useSwitchTheme()

  return (
    <article
      role="button"
      onClick={handleChangeTheme}
      className="custom-switch-theme flex items-center justify-between border-l-[5px] border-l-transparent py-3.5 sm:py-3 !px-3 sm:!px-3.5 font-semibold tracking-wide dark:!font-normal dark:md:hover:!font-normal whitespace-normal bg-transparent gap-x-5 md:hover:bg-main-700/10 md:hover:text-main-700 dark:md:hover:!font-normal dark:md:hover:bg-pink-300/30 dark:md:hover:text-pink-200"
    >
      <div className="flex items-center gap-x-2">
        <Brush size="sm" />
        <span className="leading-snug font-poppins">Cambiar de tema</span>
      </div>

      <SwitchTheme />
    </article>
  )
}

export default memo(CustomSwitchTheme)
