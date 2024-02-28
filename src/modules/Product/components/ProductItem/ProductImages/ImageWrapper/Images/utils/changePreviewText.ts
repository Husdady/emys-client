// Constants
export const DEFAULT_TEXT = 'Prevista'
export const SELECTOR = '.ant-image-mask-info'

/**
 * Changes the defaults text 'Preview' by another text
 * @param {string|undefined} text Text
 */
export default function changePreviewText(text: string = DEFAULT_TEXT) {
  // Get and validates the elements
  const elements = [...document.querySelectorAll(SELECTOR)]

  for (const element of elements) {
    const childNodes = element.childNodes
    const lastIndex = childNodes.length - 1

    // Get last node text
    const textNode = childNodes[lastIndex]

    // Replace 'Preview' text by another text
    textNode.nodeValue = text
  }
}
