// Librarys
import { message } from 'antd'

export const DURATION = 2 // Define the duration for show the float message

/**
 * Copy text to clipboard
 * @param text Text to be copy
 * @returns {void}
 */
export default async function copyToClipboard(label: string): Promise<void> {
  // Get the text field
  const el = document.createElement('input')
  el.value = label // Assign the received value as value of created element

  el.select() // Select the text field
  el.setSelectionRange(0, 99999) // For mobile devices

  // Copy the text inside the text field
  await navigator.clipboard.writeText(el.value)

  // Show float message when text is copied
  void message.info('Texto copiado al portapapeles!', DURATION)
}
