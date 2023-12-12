/**
 * Clear auto adjust from modal footer
 * @returns {void} Void
 */
export default function removeAdjustToModalFooter(): void {
  const modalFooter = document.querySelector('.ant-modal-footer') // Get modal footer
  if (modalFooter === null) return // Modal footer not exists, stop function

  modalFooter.classList.remove('mf') // Remove class added to Modal footer
}
