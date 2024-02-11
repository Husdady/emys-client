// Components
import Button from '@components/Button'
import HandSparkles from '@assets/icons/hand-sparkles'

// Hooks
import useButtonClearFilter from './useButtonClearFilters'

// Interfaces
import { ButtonProps } from '@components/Button/interfaces'

export default function ButtonClearFilters({ onClick }: Pick<ButtonProps, 'onClick'>) {
  const { disabled } = useButtonClearFilter()

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      title="Limpiar filtros"
      icon={<HandSparkles size="smx" />}
      className="btn-clear-filters min-h-[42px] bg-white rounded-full enabled:hover:opacity-70 flex items-center justify-center !gap-x-2.5 font-semibold dark:bg-gray-800 dark:text-gray-300 min-w-[165px] !px-2 border border-gray-400/50 dark:border-gray-500 shadow-sm"
    />
  )
}
