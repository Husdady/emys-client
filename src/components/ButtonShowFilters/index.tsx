// Components
import Button from '@components/Button'
import Sliders from '@assets/icons/sliders'

// Interfaces
import { ButtonProps } from '@components/Button/interfaces'

export default function ButtonShowFilters({ onClick }: Pick<ButtonProps, 'onClick'>) {
  return (
    <Button
      onClick={onClick}
      title="Mostrar filtros"
      icon={<Sliders size="smx" />}
      className="btn-show-filters min-h-[42px] bg-white rounded-full hover:opacity-70 flex items-center justify-center !gap-x-2.5 font-semibold dark:bg-gray-800 dark:text-gray-300 min-w-[172px] border border-gray-400/50 dark:border-gray-500 shadow-sm"
    />
  )
}
