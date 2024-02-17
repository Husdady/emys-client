/**
 * Create the parser of the input values of the Price range component
 * @param {string|undefined} displayValue Display value
 * @returns {number} Price parsed
 */
export default function parser(displayValue?: string): number {
  return Number(displayValue?.replace(/\$\s?|(,*)/g, ''))
}
