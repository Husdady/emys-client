// Librarys
import { memo } from 'react'
import dynamic from 'next/dynamic'

// Components
import Brush from '@assets/icons/brush'

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
      className="custom-switch-theme flex items-center justify-between border-l-[5px] border-transparent py-3.5 sm:py-3 !px-3 sm:!px-3.5 font-semibold tracking-wide dark:!font-normal dark:md:hover:!font-normal whitespace-normal bg-transparent border-b border-b-gray-300 dark:border-b-gray-600"
    >
      <div className="flex items-center gap-x-2">
        <Brush size="smx" />
        <span>Cambiar de tema</span>
      </div>

      <SwitchTheme />
    </article>
  )
}

export default memo(CustomSwitchTheme)
