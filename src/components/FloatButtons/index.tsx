// Librarys
import { memo } from 'react'

// Components
import ThemeButton from './ThemeButton'
import SearchButton from './SearchButton'
import ContactButton from './ContactButton'
import WhatsappButton from './WhatsappButton'

// Hooks
import useMobileScreen from '@hooks/useMobileScreen'

function FloatButtons() {
  const isMobileScreen = useMobileScreen()

  if (isMobileScreen) return null

  return (
    <div className="fixed py-[0.55rem] px-[0.35rem] rounded-full top-[50%] right-[2.5%] float-buttons flex flex-col gap-y-2.5 bg-white dark:bg-gray-700 min-h-[70px] shadow-xl dark:shadow-gray-600 z-[9999]">
      <SearchButton />
      <ThemeButton />
      <ContactButton />
      <WhatsappButton />
    </div>
  )
}

export default memo(FloatButtons)
