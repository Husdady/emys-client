// Components
import Button from '@components/Button'
import MagnifyingGlass from '@assets/icons/magnifying-glass'

// Hooks
import useShowQuickSearchModal from './useShowQuickSearchModal'

export default function SearchButton() {
  const showQuickSearchModal = useShowQuickSearchModal()

  return (
    <Button
      title=""
      onClick={showQuickSearchModal}
      icon={<MagnifyingGlass size="smaller" />}
      className="btn-float-contact rounded-full !w-[1.65rem] !h-[1.65rem] !p-0 bg-gray-500 dark:bg-gray-200 border-2 border-gray-600 dark:border-gray-400 text-white dark:text-gray-900"
    />
  )
}
