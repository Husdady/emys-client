/**
 * Create the formatter of the inputs of the Price range component
 * @param {number|undefined} value Input value
 * @returns {string} Price formatted
 */
export default function formatter(value?: number): string {
  return `$ ${String(value)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
