// Librarys
import { memo } from 'react'

// Components
import ThemeButton from './ThemeButton'
import SearchButton from './SearchButton'
import ContactButton from './ContactButton'
import WhatsappButton from './WhatsappButton'

// Hooks
import useFloatButtons from './useFloatButtons'

function FloatButtons() {
  const { floatButtonsRef, isBiggestTabletScreen } = useFloatButtons()

  if (isBiggestTabletScreen) return null

  return (
    <div
      ref={floatButtonsRef}
      className="fixed py-[0.55rem] px-[0.35rem] rounded-full top-[50%] right-[2.5%] float-buttons animate__animated  animate__zoomIn flex flex-col gap-y-2.5 bg-white dark:bg-gray-700 min-h-[70px] shadow-xl dark:shadow-gray-600 z-[99999] border border-gray-200 dark:border-gray-500"
    >
      <SearchButton />
      <ThemeButton />
      <ContactButton />
      <WhatsappButton />
    </div>
  )
}

export default memo(FloatButtons)
