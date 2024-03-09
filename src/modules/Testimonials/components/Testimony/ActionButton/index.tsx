// Components
import Button from '@components/Button'
import Dropdown from 'antd/lib/dropdown/dropdown'
import DotsVertical from '@components/Icons/DotsVertical'

// Hooks
import useActionButton from './useActionButton'

// Interfaces
import { ActionButtonProps } from './interfaces'

export default function ActionButton({ testimony }: ActionButtonProps) {
  const { menu } = useActionButton({ testimony: testimony })

  return (
    <Dropdown menu={menu} trigger={['click']} placement="bottomLeft">
      <Button
        title=""
        icon={<DotsVertical size="xl" />}
        className="btn-testimony-actions !absolute top-[4%] right-[2%] !p-2 rounded-full bg-transparent hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-500 dark:focus:bg-gray-500"
      />
    </Dropdown>
  )
}
