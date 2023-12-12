/**
 * Auto adjusts the modal footer
 * @returns {void} Void
 */
export default function addAdjustToModalFooter(): void {
  const modalFooter = document.querySelector('.ant-modal-footer') // Get modal footer
  if (modalFooter === null) return // Modal footer not exists, stop function

  modalFooter.classList.add('mf') // Add class for adjusts its buttons to Modal footer
}
