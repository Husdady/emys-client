// Components
import InputText from '@components/InputText'
import MagnifyingGlass from '@components/Icons/MagnifyingGlass'

// Hooks
import useTabletScreen from '@hooks/screen/useTabletScreen'

// Types
import { SearchOptionsProps } from './types'

export default function SearchOptions(props: SearchOptionsProps) {
  const isTabletScreen = useTabletScreen()

  return (
    <InputText
      {...props}
      containerClassName="w-full"
      autoFocus={!isTabletScreen}
      innerClassName="search-options dark:!bg-gray-900 dark:!border-gray-300/40 dark:outline-gray-300/40 !gap-x-2 !rounded-xl"
      icon={<MagnifyingGlass size="xsx" className="text-gray-400 dark:text-gray-300/80" />}
      className="placeholder-gray-500 dark:placeholder-gray-300/80 text-[1rem] md:text-[0.89rem]"
    />
  )
}
