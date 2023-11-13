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

/**
 * Auto adjusts the modal footer
 */
export function addAdjustToModalFooter(): void {
  const modalFooter = document.querySelector('.ant-modal-footer') // Get modal footer
  if (modalFooter === null) return // Modal footer not exists, stop function

  modalFooter.classList.add('mf') // Add class for adjusts its buttons to Modal footer
}

/**
 * Clear auto adjust from modal footer
 */
export function removeAdjustToModalFooter(): void {
  const modalFooter = document.querySelector('.ant-modal-footer') // Get modal footer
  if (modalFooter === null) return // Modal footer not exists, stop function

  modalFooter.classList.remove('mf') // Remove class added to Modal footer
}
