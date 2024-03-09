// Components
import Button from '@components/Button'
import Tooltip from '@components/Tooltip'
import MagnifyingGlass from '@components/Icons/MagnifyingGlass'

// Hooks
import useShowQuickSearchModal from './useShowQuickSearchModal'

export default function SearchButton() {
  const showQuickSearchModal = useShowQuickSearchModal()

  return (
    <Tooltip trigger={['hover']} title="Haz click para abrir el buscador">
      <Button
        title=""
        onClick={showQuickSearchModal}
        icon={<MagnifyingGlass size="smaller" />}
        className="btn-float-contact rounded-full !w-[1.65rem] !h-[1.65rem] !p-0 bg-gray-500 dark:bg-gray-200 border-2 border-gray-600 dark:border-gray-400 text-white dark:text-gray-900"
      />
    </Tooltip>
  )
}
