// Librarys
import { memo } from 'react'

// Components
import ThemeButton from './ThemeButton'
import SearchButton from './SearchButton'
import ContactButton from './ContactButton'
import WhatsappButton from './WhatsappButton'

function FloatButtons() {
  if (window?.innerWidth <= 1200) return null

  return (
    <div className="fixed py-[0.55rem] px-[0.35rem] rounded-full top-[50%] right-[2.5%] float-buttons flex flex-col gap-y-2.5 bg-white dark:bg-gray-700 min-h-[70px] shadow-xl dark:shadow-gray-600 z-[99999999]">
      <SearchButton />
      <ThemeButton />
      <ContactButton />
      <WhatsappButton />
    </div>
  )
}

export default memo(FloatButtons)
