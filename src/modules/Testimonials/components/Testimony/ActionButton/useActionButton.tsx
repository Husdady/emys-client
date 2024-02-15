// Librarys
import { useMemo } from 'react'
import { createId } from '@libs/nanoid'

// Components
import EditTestimony from './Edit'
import DeleteTestimony from './Delete'

// Interfaces
import { MenuProps } from 'antd/lib'
import { ActionButtonProps } from './interfaces'

/**
 * Hook for implements the logic of the ActionButton component
 * @param {ActionButtonProps} params Receive a 'testimony'
 */
export default function useActionButton(props: ActionButtonProps) {
  // Define the Dropdown menu
  const menu = useMemo<MenuProps>(() => {
    const items: MenuProps['items'] = [
      { label: <EditTestimony {...props} /> },
      { label: <DeleteTestimony {...props} /> }
    ].map((item) => ({ ...item, key: createId() }))

    return {
      items: items
    }
  }, [props])

  return {
    menu: menu
  }
}
