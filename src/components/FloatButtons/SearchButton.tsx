// Components
import Button from '@components/Button'
import MagnifyingGlass from '@assets/icons/magnifying-glass'

export default function SearchButton() {
  return (
    <Button
      title=""
      icon={<MagnifyingGlass size="smaller" />}
      className="btn-float-contact rounded-full !w-[1.65rem] !h-[1.65rem] !p-0 bg-gray-500 dark:bg-gray-200 border-2 border-gray-600 dark:border-gray-400 text-white dark:text-gray-900"
    />
  )
}
