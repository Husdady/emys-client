/**
 * Convert to lowercase, remove blank spaces and convert its in hyphens
 * @param str String as param
 * @return string
 */
export default function convertEmptySpacesInHyphens(str: string): string {
  return str.toLowerCase().replace(/\s+/gim, '-')
}
