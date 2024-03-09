// Librarys
import Tooltip from '@components/Tooltip'

// Components
import HelpIcon from '@components/Icons/Help'

// Interfaces
import { HelpProps } from './interfaces'

export default function Help({ title }: HelpProps) {
  return (
    <Tooltip title={title}>
      <div className="icon select-none hover-transition p-2 rounded-full hover:bg-gray-500 hover:bg-opacity-20 dark:hover:bg-opacity-50 hover:cursor-pointer">
        <HelpIcon
          size="sm"
          useHoverEffect
          className="help rounded-full pointer-events-none bg-gray-600 text-gray-200 dark:bg-pink-300 dark:text-gray-800"
        />
      </div>
    </Tooltip>
  )
}
