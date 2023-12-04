/**
 * Get all query params from url
 * @return {string[]} Array query params
 */
export default function getAllQueryParams(): string[] {
  const params = new URLSearchParams(window.location.search) // Get query params
  const fields = Array.from(params.keys()) // Convert received iterator to an array
  return fields
}
