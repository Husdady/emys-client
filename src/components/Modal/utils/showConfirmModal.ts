// Librarys
import Modal, { ModalFuncProps } from 'antd/lib/modal'

// Get confirm
const { confirm } = Modal

/**
 * Show confirm modal
 * @param {ModalFuncProps} props Confirm modal props
 * @returns {ReturnType<typeof ConfirmModal.confirm>} Confirm result
 */
export function showConfirmModal(props: ModalFuncProps): ReturnType<typeof confirm> {
  return confirm(props)
}
