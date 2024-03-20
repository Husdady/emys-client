// Librarys
import dynamic from 'next/dynamic'

// Components
import MagnifyingGlass from '@components/Icons/MagnifyingGlass'

// Interfaces
import { ButtonProps } from '@root/src/components/Button/interfaces'

// Lazy Components
const Button = dynamic(() => import('@components/Button'))

export default function ZoomButton(props: Pick<ButtonProps, 'onClick'>) {
  return (
    <Button
      {...props}
      title=""
      icon={<MagnifyingGlass size="sm" />}
      className="btn-magnifying-glass transition-colors !absolute top-[2%] left-[2.5%] !p-2.5 rounded-full z-[9999] bg-gray-100 text-gray-600 hover:bg-gray-700 hover:text-gray-100 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-pink-200 dark:hover:text-pink-900 border-[3px] border-gray-200 dark:border-gray-500 dark:hover:border-pink-100"
    />
  )
}
